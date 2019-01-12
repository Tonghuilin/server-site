const { PLUGIN_NAME } = require('./const');
const { log, color }  = require('../../../src/helper/logger');

/**
 * Log error
 *
 * @param err
 * @returns {void | *}
 */
const logErr = (err) => log(color.error(`\n ${PLUGIN_NAME}: ${err} \n`));

/**
 * Log info
 *
 * @param msg
 * @returns {void | *}
 */
const logInfo = (msg) => log(color.grayout(`\n ${PLUGIN_NAME}: ${msg} \n`));

module.exports = {
    logErr,
    logInfo,
};
