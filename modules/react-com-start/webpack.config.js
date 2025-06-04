const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({})],
  devServer: {
    static: "./dist",
    port: 3000,
    host: "localhost",
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  mode: "development",
};
