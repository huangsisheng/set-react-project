const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const _join = (p) => path.join(__dirname, "..", p);
const is_analyze = process.env.analyze;

const prod_config = {
  mode: "production",
  plugins: [
    new HTMLWebpackPlugin({
      title: "srp webpack template",
      template: _join("src/public/index.html"),
      favicon: _join("src/public/favicon.ico"),
      filename: "index.html",
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空格符与换行符
        minifyCSS: true, // 压缩内联css
      },
    }),
  ],
};

if (is_analyze) {
  prod_config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 3002 }));
}

module.exports = prod_config;
