require('@babel/register');

const Handlebars   = require('handlebars');
const { execSync } = require('child_process');
const glob         = require('glob');
const {
          readFileSync,
          writeFileSync,
          existsSync,
          mkdirSync,
      }            = require('fs');
const path         = require('path');
const {
          log,
          color,
      }            = require('../../server/helper/logger');

const PLUGIN = {
    NAME:    'SsrByHbsPlugin',
};

/**
 * Log error
 *
 * @param err
 * @returns {void | *}
 */
const logErr = (err) => log(color.error(`${PLUGIN.NAME}: ${err}`));

/**
 * Log info
 *
 * @param msg
 * @returns {void | *}
 */
const logInfo = (msg) => log(color.grayout(`${PLUGIN.NAME}: ${msg}`));

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
        log(`${PLUGIN.NAME}: ${color.success(dir)} created`);
        return newDir;
    } catch (err) {
        logErr(err);
    }
};

/**
 * get the file name from a file path
 *
 * @param filePath
 */
const getFileName = (filePath) => {
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
const createPathByFileName = (filePath, fileName) => {
    const placeholder   = '[name]';
    const needInjection = filePath.indexOf(placeholder) > -1;

    return needInjection ? filePath.replace(placeholder, fileName) : filePath;
};

/**
 * register handlebar partials under the folder paths
 *
 * @param folderPaths
 */
const registerPartials = (folderPaths) => {
    folderPaths.forEach((folderPath) => {
        const files = glob.sync(folderPath) || [];

        files.forEach((filePath) => {
            const { name } = path.parse(filePath);
            const content  = readFileSync(filePath, 'utf8');

            Handlebars.registerPartial(name, content);
        });
    });
};

/**
 * prepare handlebar, e.g. partials
 *
 * @param config
 */
const prepareHandlebars = (config) => {
    registerPartials(config.partials);
};

/**
 * create page content by HBS template + data
 *
 * @param templatePath
 * @param pageData
 * @returns {string}
 */
const createPageContent = (templatePath, pageData) => {
    try {
        const template = readFileSync(templatePath, 'utf8');
        const content  = Handlebars.compile(template)(pageData);

        return (content || '').trim();
    } catch (err) {
        logErr(err);

        return '';
    }
};

/**
 * Capture shell print for hot data
 *
 * @param filePath
 * @returns {*}
 */
const getPageData = (filePath) => {
    try {
        const printer = path.join(__dirname, 'helper', 'printTemplateData.js');
        const data    = execSync(`node ${printer} --file=${filePath}`, { encoding: 'utf8' });

        return JSON.parse(data);
    } catch (err) {
        logErr(err);

        return {};
    }
};

/**
 * output all pages
 *
 * @param config
 * @returns {any[]}
 */
const writePages = (config) => {
    const files = glob.sync(config.entry) || [];

    return files.map((filePath) => {
        const pageData     = getPageData(filePath);
        const fileName     = getFileName(filePath);
        const templatePath = createPathByFileName(config.template, fileName);
        const pageContent  = createPageContent(templatePath, pageData);
        const outputPath   = createPathByFileName(config.output, fileName);

        writeEachPage(outputPath, pageContent);
    });
};

/**
 * Generate a callback function by config.
 * This CB function is to write JSON file for HandlebarsPlugin
 *
 * @param outputPath
 * @param pageContent
 *
 * @returns {{}|undefined}
 */
const writeEachPage = (outputPath, pageContent) => {
    try {
        writeFileSync(outputPath, pageContent, 'utf8');
        logInfo(`updated ${outputPath}`);
    } catch (err) {
        logErr(err);
    }
};

/**
 * Need to add entry files (controller/*.js) to watch list, since they're only used for SSR
 *
 * @param entry
 * @param fileDependencies
 */
const addEntryToDependencies = ({ entry }, { fileDependencies }) => {
    if (!fileDependencies) { return; }

    const entryFiles = glob.sync(entry) || [];
    entryFiles.forEach(filePath => {
        if (fileDependencies.has(filePath)) { return; }

        fileDependencies.add(filePath);
        logInfo(`Added ${filePath} to file dependencies`);
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
        compiler.hooks.make.tap(PLUGIN.NAME, () => {
            mayCreateOutputFolder(this.config);
            prepareHandlebars(this.config);
            writePages(this.config);
        });

        compiler.hooks.emit.tap(PLUGIN.NAME, (compliation) => {
            addEntryToDependencies(this.config, compliation);
        });
    }
}

module.exports = {
    SsrByHbsPlugin,
};
