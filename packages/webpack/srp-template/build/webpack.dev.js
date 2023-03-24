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
    historyApiFallback: true,
    ...dev_proxy,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HTMLWebpackPlugin({
      filename: "index.html",
      title: "srp webpack template",
      template: _join("src/public/index.html"),
      favicon: _join("src/public/favicon.ico"),
    }),
  ],
};

module.exports = dev_config;
