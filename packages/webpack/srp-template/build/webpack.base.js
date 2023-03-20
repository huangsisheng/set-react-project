const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const _resolve = (p) => path.join(__dirname, p);

const base_config = (opts) => {
  return {
    entry: _resolve("src/index.jsx"),
    output: {
      publicPath: "/",
      fileName: "[name].js",
    },
    plugins: [
      new HTMLWebpackPlugin({
        minifyJS: true,
        title: "srp webpack template",
        template: _resolve("src/index.html"),
      }),
    ],
  };
};

module.exports = base_config;
