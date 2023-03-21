const { merge } = require("webpack-merge");

const base_config = require("./webpack.base");
const dev_config = require("./webpack.dev");
const prod_config = require("./webpack.prod");

const ENV = process.env.NODE_ENV;
module.exports = function () {
  switch (ENV) {
    case "dev":
    default:
      return merge(base_config, dev_config);
    case "prod":
      return merge(base_config, prod_config);
  }
};
