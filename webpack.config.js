const webpack = require('webpack');
const path = require('path');

const joinToDirname = pth => path.join(__dirname, pth);

module.exports = {
  cache: true,
  devtool: 'eval',

  entry:  {
    kleisli: joinToDirname('/src/index.js'),
},
  output: {
    path: joinToDirname('/dist'),
    filename: '[name].js',
    library: 'library',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: JSON.stringify({
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-object-rest-spread']
        })
      }
    ]
  },

  stats: {
    children: false
  }
}
