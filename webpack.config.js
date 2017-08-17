module.exports = {

  // set the context (optional)
  context: __dirname,
  entry: 'index.js',

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    modules: [
      __dirname,
      "node_modules"
    ]
  },

  module: {
    rules: [

      // load and compile javascript
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},

      // load css and process scss
      {test: /\.css/, loader: "style-loader!css-loader"},

      // load JSON files and HTML
      {test: /\.json$/, loader: "json"},
      {test: /\.html$/, exclude: /node_modules/, loader: "raw-loader"},

      // load fonts(inline base64 URLs for <=8k)
      {test: /\.(ttf|eot|svg|otf)$/, loader: "file-loader"},
      {
        test: /\.woff(2)?$/,
        loader: "url-loader?limit=8192&minetype=application/font-woff"
      },

      // load images (inline base64 URLs for <=8k images)
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },

  // webpack dev server configuration
  devServer: {
    noInfo: false
  },

  // support source maps
  devtool: "#inline-source-map"
};
