/**
 * @file consoleModuleExport
 *
 * @description When in webpack watch mode, in the webpack plugin,
 *              you won't get the fresh exports of a file by calling require('...').
 *              We need shell execute the file, console the exports, then capture it.
 */

require('@babel/register');
require('@babel/polyfill');
require('../../../src/global');

const { transformTemplateData } = require('./transformTemplateData');

const args        = require('yargs').argv || {};
const fileExports = require(args.file);

/**
 * Output by console.log
 */
console.log(
    transformTemplateData(fileExports),
);
