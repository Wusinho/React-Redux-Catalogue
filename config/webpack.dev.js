/* eslint-disable */
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3001,
    contentBase: '../dist',
    open: 'google-chrome',
    hot: true,
    historyApiFallback: true
  },
  target: 'web',
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: 'source-map',
};

module.exports = merge(common, devConfig);