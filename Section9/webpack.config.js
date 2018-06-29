
var path = require('path'); // builtin node module
var HtmlWebpackPlugin = require('html-webpack-plugin');
// export this configuration object that we are about to write here
// . dot isCurrent folder
  module.exports = {
    entry: "./src/index.js",

    // output, tell webpack where to save out bundle file.
    output:{

      path: path.resolve(__dirname, 'dist/js'),
      filename:'js/bundle.js'

    },

  devServer:{
    contentBase:'./dist'
  }
//
//  plugin:{
//    new HtmlWebpackPlugin({
//      filename:'index.html',
//      template: './src/index.html'
//  })
//  }

  };
