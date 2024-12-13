const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.ts") },
  resolve: {
    extensions: [".ts", ".js", ".scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
    publicPath: "/portfolio/",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 5000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.(pdf|png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Abhishek Sharma",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new HTMLWebpackPlugin({
      title: "Abhishek Sharma | About",
      filename: "about.html",
      template: path.resolve(__dirname, "src/about.html"),
    }),
    new HTMLWebpackPlugin({
      title: "Abhishek Sharma | Projects",
      filename: "projects.html",
      template: path.resolve(__dirname, "src/projects.html"),
    }),
  ],
};
