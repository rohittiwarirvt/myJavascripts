const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [
        'react-hot-loader',
        'babel-loader'
      ]
    }],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  context: resolve(__dirname, 'src'),
  devServer: {
    contentBase: resolve(__dirname,'dist'),
    hot: true,
    publicPath: '/'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
}