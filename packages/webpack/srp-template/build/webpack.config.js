const { merge } = require("webpack-merge");

const base_config = require("./webpack.base");
const dev_config = require("./webpack.dev");
const prod_config = require("./webpack.prod");

const { NODE_ENV } = process.env;

module.exports = function () {
  switch (NODE_ENV) {
    case "development":
    default:
      return merge(base_config, dev_config);
    case "production":
      return merge(base_config, prod_config);
  }
};
