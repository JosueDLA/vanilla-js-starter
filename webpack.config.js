const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
  },
};
