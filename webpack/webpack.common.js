const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '..', 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JavaScript Demo'
        })
    ]
};
