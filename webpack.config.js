const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    fileName: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          use: [
            'babel-loader',
            'cache-loade',
          ],
          options: {
            "presets": ['es2015', 'react'],
            "plugins": ["transform-runtime"],
          },
        },
        exclude: /node_modules/,
        include: path.resolve('src'),
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoader: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
        ]
      },
    ]
  },
  plugins: []
}