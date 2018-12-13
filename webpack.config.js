require('@babel/register');
require('@babel/polyfill');
require('./src/global');

const path               = require('path');
const { SsrByHbsPlugin } = require('./webpack/plugin-ssr-by-hbs/index');
const config             = require('./config');
const { log, color }     = require('./server/helper/logger');

const mode = process.env.NODE_ENV || 'development';

log(`Mode: ${color.highlight(mode)} ${color.grayout(__dirname)}`);

const webConfig = {
    mode,
    entry:   path.join(__dirname, config.src, 'index.js'),
    output:  {
        path:       path.join(__dirname, config.dist),
        filename:   config.bundle,
        publicPath: config.static,
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test:    /\.jsx?$/,
                exclude: [
                    path.join(__dirname, 'node_modules'),
                ],
                loader:  'babel-loader',
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new SsrByHbsPlugin({
            entry:    path.join(__dirname, config.src, 'controller', '*.js'),
            template: path.join(__dirname, config.src, 'view', 'index.hbs'),
            output:   path.join(__dirname, config.dist, '[name].html'),
            partials: [
                path.join(__dirname, config.src, 'view', 'partial', '*.hbs'),
            ],
        }),
    ],
};

module.exports = webConfig;
