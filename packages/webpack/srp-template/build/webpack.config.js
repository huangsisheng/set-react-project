const base_config = require("./webpack.base");
const dev_config = require("./webpack.dev");
const prod_config = require("./webpack.prod");

const env = process.env.NODE_ENV;

const configs = {};

module.exports = configs;
