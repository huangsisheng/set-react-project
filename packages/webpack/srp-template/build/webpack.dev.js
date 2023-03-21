const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const dev_proxy = require("./dev_proxy");
const _join = (p) => path.join(__dirname, "..", p);

const dev_config = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    ...dev_proxy,
  },
  module: {},
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: "srp webpack template",
      template: _join("src/index.html"),
    }),
  ],
};

module.exports = dev_config;
