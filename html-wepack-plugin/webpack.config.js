const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: resolve(__dirname,'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules:
    [
      { test: /\.js?$/, exclude: /node_modules/, use:'babel-loader'}

    ]
  },
  context: resolve(__dirname,'src'),
  devServer: {
    contentBase: resolve(__dirname, 'src'),
    hot: true,
    publicPath:'/'
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: "My App",
      filename: 'assets/admin.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin()
  ]
}