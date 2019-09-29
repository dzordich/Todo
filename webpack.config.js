const Dotenv = require('dotenv-webpack');

module.exports = {
    watch: true,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new Dotenv()
    ]
  };
