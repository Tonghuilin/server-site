const glob             = require('glob');
const path             = require('path');
const Hbs              = require('handlebars');
const { readFileSync } = require('fs');
const logger           = require('./logger');

/**
 * register handlebars custom helpers
 */
const registerHelpers = (helpers) => {
    Object.keys(helpers).forEach((name) => {
        Hbs.registerHelper(name, helpers[name]);
    });
};

/**
 * register handlebars partials under the folder paths
 *
 * @param folderPaths
 */
const registerPartials = (folderPaths) => {
    folderPaths.forEach((folderPath) => {
        const files = glob.sync(folderPath) || [];

        files.forEach((filePath) => {
            const { name } = path.parse(filePath);
            const content  = readFileSync(filePath, 'utf8');

            Hbs.registerPartial(name, content);
        });
    });
};

/**
 * register for handlebars, e.g. partials, helpers
 *
 * @param config
 */
const registerHbs = (config) => {
    registerPartials(config.partials);
    registerHelpers(config.helpers);
};


/**
 * create page content by HBS template + data
 *
 * @param templatePath
 * @param pageData
 * @returns {string}
 */
const renderHbsTemplate = (templatePath, pageData) => {
    try {
        const template = readFileSync(templatePath, 'utf8');
        const content  = Hbs.compile(template)(pageData);

        return (content || '').trim();
    } catch (err) {
        logger.logErr(err);

        return '';
    }
};

module.exports = {
    registerHbs,
    renderHbsTemplate,
};
