const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.scss$/,
      user: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  }
};