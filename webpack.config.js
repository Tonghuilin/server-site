const path                    = require('path');
const { PreHandlebarsPlugin } = require('./webpack/plugin-pre-handlebars');
const config                  = require('./config');

const webConfig = {
    mode:    'development',
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
        new PreHandlebarsPlugin({
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
