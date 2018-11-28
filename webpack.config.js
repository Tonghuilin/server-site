const path                = require('path');
const PreHandlebarsPlugin = require('./webpack/plugin-pre-handlebars');
const HandlebarsPlugin    = require('handlebars-webpack-plugin');
const config              = require('./config');

const webpackConfig = {
    mode:    'development',
    entry:   path.join(process.cwd(), config.src, 'index.js'),
    output:  {
        path:       path.join(process.cwd(), config.dist),
        filename:   config.bundle,
        publicPath: config.static,
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test:    /\.jsx?$/,
                exclude: [
                    path.join(process.cwd(), 'node_modules'),
                ],
                loader:  'babel-loader',
            },
        ],
    },

    plugins: [
        new PreHandlebarsPlugin({
            entry:  path.join(process.cwd(), config.src, 'controller', 'index.js'),
            output: path.join(process.cwd(), config.src, 'controller', 'data.json'),
        }),
        new HandlebarsPlugin({
            entry:    path.join(process.cwd(), config.src, 'view', '*.hbs'),
            output:   path.join(process.cwd(), config.dist, '[name].html'),
            partials: [
                path.join(process.cwd(), config.src, 'view', 'partial', '*.hbs'),
            ],
            data:     path.join(process.cwd(), config.src, 'controller', 'data.json'),
        }),
    ],
};

module.exports = webpackConfig;
