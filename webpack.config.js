const { join } = require("path")

module.exports = {
  entry: join(__dirname, "src", "index.ts"),
  context: join(__dirname, "src"),
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "~": join(__dirname, "src"),
    },
  },
  output: {
    path: join(__dirname, "build"),
    library: "ExpectedUI",
    libraryTarget: "umd",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: process.env.NODE_ENV === "production" ? false : 10000,
          name: "assets/[hash:8].[ext]",
          fallback: "file-loader",
        },
      },
    ],
  },
}
