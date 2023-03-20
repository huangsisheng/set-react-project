const BundleAnalyzePlugin = require("webpack-bundle-analyzer");

const prod_config = (opts) => {
  const opts = Object.assign({}, { analyze: false });
  return {
    plugins: ((plugins) => {
      if (opts.analyze) {
        plugins.push(new BundleAnalyzePlugin());
      }
      return plugins;
    })([]),
  };
};

module.exports = prod_config;
