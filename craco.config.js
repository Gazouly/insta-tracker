const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
      "@core": path.resolve(__dirname, "src/core"),
      "@router": path.resolve(__dirname, "src/router"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
    },
  },
};
