const path = require("path");
const webpack = require("webpack"); // only add this if you don't have yet

let envKeys = require("dotenv").config();
module.exports = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public",
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(envKeys.parsed),
    }),
  ],
};
