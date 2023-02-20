const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

process.env.production = "true";

module.exports = merge(
  {
    mode: "production",
    plugins: [new CleanWebpackPlugin()],
  },
  baseConfig
);
