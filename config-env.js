const env = require('./env.json');

/**
 * Client/Server
 * @type {boolean}
 */
process.env.IS_CLIENT = typeof window !== 'undefined';

/**
 * Key - Baidu Map
 * @type {string}
 */
process.env.KEY_BMAP = env.keyBMap || '';
