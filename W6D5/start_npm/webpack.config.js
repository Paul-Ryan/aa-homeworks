// webpack.config.js
var path = require('path');

module.exports = {
  entry: "./index.jsx",
  output: {
      filename: "./bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
};
