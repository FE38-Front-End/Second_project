const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode:'development',
    entry: {
        first: './app/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'main.html',
            template: './app/index.html',
            chunks: ['[name].[hash].js']
        }),
        new HTMLWebpackPlugin({
            filename: 'products-list_gorizontal.html',
            template: './app/products-list_gorizontal.html',
            chunks: ['[name].[hash].js']
        }),
        new HTMLWebpackPlugin({
            filename: 'products-list.html',
            template: './app/products-list.html',
            chunks: ['[name].[hash].js']
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([
        //     {
        //     from: path.resolve(__dirname, './app/images'),
        //     to: path.resolve(__dirname, './dist/images')
        //     }
        // ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader']
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    use: ['style-loader','css-loader', 'sass-loader']
                })
            }
        ]
    }
}