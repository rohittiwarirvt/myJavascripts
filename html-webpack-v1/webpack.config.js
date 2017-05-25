const { resolve } = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    helloWorld:[
       'webpack-dev-server/client?http://localhost:8080',
       'webpack/hot/only-dev-server',
       './js/helloworld',
       ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'public/[name].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: resolve(__dirname, 'src'),
    hot: true,
    publicPath:'/'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin()
  ]
};