const { PLUGIN_NAME } = require('./const');
const { log, color }  = require('../../../src/helper/logger');

/**
 * Log error
 *
 * @param err
 * @returns {void | *}
 */
const logErr = (err) => log(color.error(`${PLUGIN_NAME}: ${err}`));

/**
 * Log info
 *
 * @param msg
 * @returns {void | *}
 */
const logInfo = (msg) => log(color.grayout(`${PLUGIN_NAME}: ${msg}`));

module.exports = {
    logErr,
    logInfo,
};
