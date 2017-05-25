const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, use:'babel-loader'}
    ]
  },
  context: resolve(__dirname, 'src'),
  devServer: {
    contentBase: resolve(__dirname,'dist'),
    hot: true,
    publicPath : '/',
    port: 8888
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

}