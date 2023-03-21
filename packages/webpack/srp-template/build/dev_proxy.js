module.exports = {
  port: 3000,
  host: "localhost",
  proxy: {
    "/api": {
      target: "https://other-server.example.com",
      changeOrigin: true,
    },
  },
};
