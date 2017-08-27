var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    server: './src/server.js',
    client: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React SSR',
      minify: {
          collapseWhitespace: true
      },
      hash: true,
      template: './public/index.html',
      excludeChunks: ['server']
    })
  ]
}