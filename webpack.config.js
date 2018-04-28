const path = require('path');

module.exports = {
  context: __dirname,
  entry: 'index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "main.js"
  },

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    modules: [
      "node_modules",
      __dirname
    ]
  },

  module: {
    rules: [

      // load and compile javascript
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      // load css and process scss
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },

      // load JSON files
      {
        test: /\.json$/,
        loader: "json"
      },

      // load HTML files
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "raw-loader"
      },

      // load fonts(inline base64 URLs for <=8k)
      {
        test: /\.(ttf|eot|svg|otf|woff)$/,
        loader: "file-loader"
      },

      // load images (inline base64 URLs for <=8k images)
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  },

  // webpack dev server configuration
  devServer: {
    noInfo: false
  }
};
