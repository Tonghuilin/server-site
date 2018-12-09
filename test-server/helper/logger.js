const chalk = require('chalk');

const log = console.log;

const color = {
    warn:      chalk.yellow,
    error:     chalk.bold.red,
    success:   chalk.green,
    highlight: chalk.cyan,
};

module.exports = {
    log,
    color,
};
