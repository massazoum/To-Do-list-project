// const path = require('path');

//  module.exports = {
//   mode: 'development',
//    entry: './src/index.js',

//    output: {
//      filename: 'bundle.js',
//      path: path.resolve(__dirname, 'dist'),
//    },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
      
//     ],
//   },
//   devServer: {
//     static: './dist',
//   }, 
//   optimization: {
//     runtimeChunk: 'single',
//   },
//  };
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
