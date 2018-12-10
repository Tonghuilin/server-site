require('@babel/register');

const {
          readFileSync,
          writeFileSync,
          existsSync,
          mkdirSync,
      }              = require('fs');
const glob           = require('glob');
const path           = require('path');
const { execSync }  = require('child_process');
const Handlebars     = require('handlebars');
const { log, color } = require('../test-server/helper/logger');

const PLUGIN = {
    NAME:    'PreHandleBarsPlugin',
    HASH_ID: 'webpack-plugin-pre-handlebars',
};

const logErr = (err) => log(`${PLUGIN.NAME}: ${color.error(err)}`);

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

const getPageData = (filePath) => {
    try {
        const data = execSync(`node ./webpack/helper/consoleModuleExport.js --file=${filePath}`, { encoding: 'utf8' });

        return JSON.parse(data);
    } catch(err) {
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
        log(`${PLUGIN.NAME}: updates ${color.success(outputPath)} successfully`);
    } catch (err) {
        logErr(err);
    }
};

/**
 * Prepare data.json for handlebars templates
 */
class PreHandlebarsPlugin {
    constructor(props) {
        this.config = props;
    }

    apply(compiler) {
        compiler.hooks.make.tap('PreHandlebarsPlugin', () => {
            mayCreateOutputFolder(this.config);
            prepareHandlebars(this.config);
            writePages(this.config);
        });
    }
}

module.exports = {
    PreHandlebarsPlugin,
};
