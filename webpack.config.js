require('./src/global');

const path               = require('path');
const { SsrByHbsPlugin } = require('./webpack/plugin-ssr-by-hbs/index');
const config             = require('./config');
const { log, color }     = require('./src/helper/logger');

const mode = process.env.NODE_ENV || 'development';

log(`Mode: ${color.highlight(mode)} ${color.grayout(__dirname)}`);

const webConfig = {
    mode,
    entry:   ['@babel/polyfill', path.join(__dirname, config.src, 'index.js')],
    output:  {
        path:       path.join(__dirname, config.dist),
        filename:   config.bundle,
        publicPath: `${config.dist}/`,
    },
    devtool: 'source-map',
    module:  {
        rules: [
            {
                test:    /\.jsx?$/,
                exclude: [
                    path.join(__dirname, 'node_modules'),
                ],
                use:     {
                    loader:  'babel-loader',
                    options: {
                        configFile: './babel.config.js',
                        ...require('./babel.config'),
                    },
                },
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
            helpers:  {
                jsonStringify: (value) => (typeof value !== 'string' ? JSON.stringify(value) : value),
            },
        }),
    ],
};

module.exports = webConfig;
