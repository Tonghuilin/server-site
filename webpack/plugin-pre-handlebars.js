require('@babel/register');

const {
          writeFileSync,
          existsSync,
          mkdirSync,
      }              = require('fs');
const path           = require('path');
const format         = require('date-fns/format');
const { log, color } = require('../test-server/helper/logger');
const config         = require('../config');

const PLUGIN = {
    NAME:    'PreHandleBarsPlugin',
    HASH_ID: 'webpack-plugin-pre-handlebars',
};

const logErr = (err) => log(`${PLUGIN.NAME}: ${color.error(err)}`);

/**
 * Create the output folder if not exists
 *
 * @param filePath
 * @returns {*}
 */
const mayCreateOutputFolder = (filePath) => {
    try {
        const dir       = path.dirname(filePath);
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
 * update hash in hbs partial to force it re-render
 * @returns {*}
 */
const updateHash = () => {
    try {
        const hash     = `<!-- ${PLUGIN.HASH_ID}-${format(Date.now(), 'YYYY-MM-DD-HH-mm-ss')} -->`;
        const filePath = path.join(process.cwd(), config.src, 'view/partial/hash.hbs');

        writeFileSync(filePath, hash);
    } catch (err) {
        return logErr(err);
    }
};

/**
 * Generate a callback function by config.
 * This CB function is to write JSON file for HandlebarsPlugin
 *
 * @param output
 * @param data
 * @returns {Function}
 */
const writeJSON = ({ entry, output }) => {
    try {
        const data    = require(entry);
        const content = JSON.stringify(data, undefined, 4);

        mayCreateOutputFolder(output);

        writeFileSync(output, content, 'utf8');
        log(`${PLUGIN.NAME}: updates ${color.success(output)} successfully`);

        // updateHash();
        return data;
    } catch (err) {
        logErr(err);

        return undefined;
    }
};

/**
 * Prepare data.json for handlebars templates
 */
class PreHandlebarsPlugin {
    constructor(props) {
        this.config = props;
        this.state  = {};
    }

    apply(compiler) {
        compiler.hooks.beforeCompile.tapAsync('PreHandlebarsPlugin', (compliance, callback) => {
            writeJSON(this.config);
            callback();
        });
    }
}

module.exports = {
    mayCreateOutputFolder,
    writeJSON,
    updateHash,
    PreHandlebarsPlugin,
};
