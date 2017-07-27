const webpack = require('webpack');
const path = require('path');

const devConfig = {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, '..', 'src'),
            enforce: 'pre',
            loader: 'eslint-loader'
        }]
    }
};

module.exports = devConfig;
