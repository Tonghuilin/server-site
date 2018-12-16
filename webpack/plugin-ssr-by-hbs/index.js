const { fork }                           = require('child_process');
const glob                               = require('glob');
const {
          writeFileSync,
          existsSync,
          mkdirSync,
      }                                  = require('fs');
const path                               = require('path');
const flattern                           = require('lodash/flatten');
const logger                             = require('./helper/logger');
const { PLUGIN_NAME }                    = require('./helper/const');
const { registerHbs, renderHbsTemplate } = require('./helper/hbs');

/**
 * Create the output folder if not exists
 *
 * @param config
 * @returns {*}
 */
const mayCreateOutputFolder = (config) => {
    try {
        const dir       = path.dirname(config.output);
        const doesExist = existsSync(dir);

        if (doesExist) {
            return;
        }

        const newDir = mkdirSync(dir);
        logger.logInfo(`${dir} created`);

        return newDir;
    } catch (err) {
        logger.logErr(err);
    }
};

/**
 * get the file name from a file path
 *
 * @param filePath
 */
const getNameFromPath = (filePath) => {
    const { name } = path.parse(filePath);
    return name;
};

/**
 * replace [name] in a file path with the given file name
 *
 * @param filePath
 * @param fileName
 * @returns {*}
 */
const setNameInPath = (filePath, fileName) => {
    const placeholder   = '[name]';
    const needInjection = filePath.indexOf(placeholder) > -1;

    return needInjection ? filePath.replace(placeholder, fileName) : filePath;
};

const bufToJson = (buf) => JSON.stringify((buf));

const bufToData = (buf) => JSON.parse(bufToJson(buf));


/**
 * user child_process.fork: fork a module => data for its handlebar template
 * FYI: fork does not send functions
 *
 * @param filePath
 * @returns {Promise<any>}
 */
const getTemplateData = (filePath) => new Promise((resolve, reject) => {
    const forked = fork(
        './webpack/plugin-ssr-by-hbs/helper/forkModule.js',
        ['--filePath', filePath],
        {
            // execPath: 'babel-node',
            silent: true,
        },
    );

    const { stdout, stderr } = forked;

    forked.on('message', (buf) => {
        const pageData       = bufToData(buf);
        const pageDataString = bufToJson(buf);

        logger.logInfo(`[message] ${pageDataString}`);
        resolve(pageData);
    });

    forked.on('error', (buf) => {
        const err       = bufToData(buf);
        const errString = bufToJson(buf);

        logger.logErr(errString);
        reject(err);
    });

    forked.on('close', (code) => {
        console.log('[code on close] ', code);
    });

    forked.send('getProps');

    stdout.on('data', (buf) => {
        const data = bufToJson(buf);
        logger.logInfo(`[stdout data] ${data}`);
    });

    stderr.on('data', (buf) => {
        const err = bufToJson(buf);
        logger.logInfo(`[stdout err] ${err}`);
    });
});


/**
 * output all pages
 *
 * @param config
 * @returns {any[]}
 */
const writePages = async (config) => {
    const files = glob.sync(config.entry) || [];

    return await files.map(async (filePath) => {
        const templateData = await getTemplateData(filePath);

        const fileName = getNameFromPath(filePath);

        const outputPath   = setNameInPath(config.output, fileName);
        const templatePath = setNameInPath(config.template, fileName);

        const renderedContent = renderHbsTemplate(templatePath, templateData);

        writeFileSync(outputPath, renderedContent, 'utf8', (err) => {
            if (err) {
                logger.logErr(err);
                throw new Error(`Failed to write File: ${outputPath}`);
            }
            logger.logInfo(`updated ${outputPath}`);
        });
    });
};

/**
 * Need to add entry files (controller/*.js) to watch list, since they're only used for SSR
 *
 * @param entry
 * @param fileDependencies
 */
const addToDependencies = ({ template, partials }, { fileDependencies }) => {
    if (!fileDependencies) {
        return;
    }

    // glob patterns to track => file paths
    const filePaths = flattern(
        [template, ...partials].map((pattern) => glob.sync(pattern)),
    );

    filePaths.forEach(filePath => {
        if (fileDependencies.has(filePath)) {
            return;
        }

        fileDependencies.add(filePath);
        logger.logInfo(`Added ${filePath} to file dependencies`);
    });
};

/**
 * Prepare data.json for handlebars templates
 */
class SsrByHbsPlugin {
    constructor(props) {
        this.config = {
            mode: process.env.NODE_ENV || 'development',
            ...props,
        };
    }

    apply(compiler) {
        compiler.hooks.make.tap(PLUGIN_NAME, async () => {
            mayCreateOutputFolder(this.config);
            registerHbs(this.config);

            try {
                await writePages(this.config);
            } catch (err) {
                logger.logErr(err);
            }
        });

        compiler.hooks.emit.tap(PLUGIN_NAME, (compliation) => {
            addToDependencies(this.config, compliation);
        });
    }
}

module.exports = {
    SsrByHbsPlugin,
};
