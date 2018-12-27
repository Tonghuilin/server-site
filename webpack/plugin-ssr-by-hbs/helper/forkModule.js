/**
 * @file fork a module
 *
 * @description When in webpack watch mode, in the webpack plugin,
 *              you won't get the fresh exports of a file by calling require('...').
 *              We need hot execute the file, and process.send the result back to the parent.
 */
require('@babel/register')(require('../../../babel.config'));

require('@babel/polyfill');

const args                       = require('yargs').argv || {};
const { prepareHbsTemplateData } = require('./prepareHbsTemplateData');
const logger                     = require('./logger');

process.on('message', async (msg) => {
    const { filePath } = args;

    const module                  = require(filePath);
    const { getProps, component } = module;

    logger.logInfo(`Message from parent: ${msg}`);

    try {
        const componentProps  = await getProps();
        const hbsTemplateData = await prepareHbsTemplateData({ component, componentProps });

        process.send(hbsTemplateData);
    } catch (error) {
        process.send(error);
    }
});
