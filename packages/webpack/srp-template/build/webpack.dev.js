const dev_server_config = require("./dev.server.config");

const dev_config = (opts) => {
  return {
    devServer: dev_server_config || {},
  };
};

module.exports = dev_config;
