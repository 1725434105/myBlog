const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    fileName: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ['es2015', 'react'],
          },
          exclude: /node_modules/,
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
        options: {
          sourceMap: true,
        },
      }
    ]
  },
}