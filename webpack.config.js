const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "modules": false,
                  "useBuiltIns": "usage",
                  "corejs": 3,
                  "targets": {
                    "browsers": ["> 0.5%", "ie 11", "last 2 versions", "not dead"]
                  }
                }
              ]
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              '@babel/plugin-transform-async-to-generator',
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ],
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: path.join(__dirname, "./loaders/scss-loader.js")
      }
    ]
  }

};