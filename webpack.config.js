const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: 'production',
  entry: './src/index.js',
  plugins: [
   new HtmlWebpackPlugin({
    title: 'Output Management',
    template: './src/index.html',
   }),
 ],
 devServer: {
  static: './dist',
},
  output: {
    filename: 'build/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
   ],
 },
 optimization: {
  runtimeChunk: 'single',
},
};