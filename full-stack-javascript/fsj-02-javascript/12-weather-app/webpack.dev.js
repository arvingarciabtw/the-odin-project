const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
require("dotenv").config();

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        API_KEY: JSON.stringify(process.env.API_KEY),
      },
    }),
  ],
});
