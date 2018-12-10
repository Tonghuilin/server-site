/**
 * @file consoleModuleExport
 *
 * @description When in webpack watch mode, in the webpack plugin,
 *              you won't get the fresh exports of a file by calling require('...').
 *              We need shell execute the file, console the exports, then capture it.
 */
require('@babel/register');

const omit           = require('lodash/fp/omit');
const renderCompHtml = require('./renderCompHtml');

const args        = require('yargs').argv || {};
const fileExports = require(args.file);

/**
 * get the rendered html
 *
 * @param data
 * {{
 *     component
 *     props
 * }}
 * @returns {{html}}
 */
const getHtml = (data) => {
    const { component, props } = data;

    if (!component) {
        throw new Error('Cannot find component to render');
    }

    return renderCompHtml(component, props);
};

/**
 * Build data: inject html, then omit component and props used to generate html
 *
 * @param data
 * @returns {string}
 */
const buildData = (data) => {
    const result = {
        ...omit(['component', 'props'], data),
        html: getHtml(data),
    };

    return JSON.stringify(result);
};

/**
 * Output by console.log
 */
console.log(
    buildData(fileExports),
);
