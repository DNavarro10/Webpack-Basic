const HtmlWebPackPlugin = require('html-webpack-plugin');
const miniCSSstract = require('mini-css-extract-plugin');
const OptimizeCssAssetsPluging = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    optimization: {
        minimizer: [new OptimizeCssAssetsPluging()]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /globalStyle\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /globalStyle\.css$/,
                use: [
                    miniCSSstract.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false

                }

            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new miniCSSstract({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' }
            ],
        }),

    ]


};