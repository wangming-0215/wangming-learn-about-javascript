const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');

module.exports = (env) => {
    if (env === 'development') {
        return webpackMerge(commonConfig, devConfig);
    }
};
