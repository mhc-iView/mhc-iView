const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'vue-component',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          plugins: (loader) => [
            autoprefixer({
              add:true,
              browsers:["iOS >= 8", "Android >= 4"]
            })
          ]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css|\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.png|jpe?g|gif|svg$/,
        loader:  "url-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Title',
      filename: 'index.html',
      template: './index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    open:true, // 自动打开浏览器，每次启动服务器会自动打开默认的浏览器
  }
};
