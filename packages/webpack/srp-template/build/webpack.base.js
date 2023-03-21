const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const _join = (p) => path.join(__dirname, "..", p);

const base_config = {
  entry: _join("src/index.jsx"),
  output: {
    path: _join("dist"),
    filename: "static/js/[name]_[hash:6].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        include: /src/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          cacheCompression: true,
        },
      },
      {
        test: /\.css$/,
        include: /src/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2)$/,
        include: /src/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "[name]-[hash].[ext]",
          outputPath: "static/images",
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};

module.exports = base_config;
