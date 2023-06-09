const path = require("path");

module.exports = {
  entry: "./src2./js./01-gallery.js", // The entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // The output directory for bundled files
    filename: "bundle.js", // The name of the bundled file
  },
  // Additional configuration options if needed
};
