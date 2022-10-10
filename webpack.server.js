const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
module.exports = {
  target: "node",
  entry: "./server/server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            "es2015",
            "es2016",
            "es2017",
            "react",
            "stage-0",
            ["env", { target: { browsers: ["last 2 versions"] } }],
          ],
          plugins: [
            "babel-plugin-transform-class-properties",
            "babel-plugin-transform-object-rest-spread",
          ],
        },
      },
    ],
  },
  externals: [webpackNodeExternals()],
};
