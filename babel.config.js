module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
    ],
    plugins: [
        'emotion',
        [
            'file-loader',
            {
                publicPath: 'asset',
                outputPath: 'dist/asset',
            },
        ],
    ],
    env:     {
        development: {
            plugins: [
                [
                    'emotion',
                    {
                        sourceMap: true,
                    },
                ],
            ],
        },
    },
};
