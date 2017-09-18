
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


const isProd = process.env.NODE_ENV === 'production'; //true or false
const cssDev = [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }];
const cssProd = ExtractTextPlugin.extract({fallback:"style-loader", use:['css-loader', 'sass-loader'], publicPath: '/dist/'});
const cssConfig = isProd ? cssProd : cssDev;



module.exports = {
  entry: {
      app: './src/app.js',
    },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015']
          }
        }
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: ['file-loader?name=[name].[ext]&outputPath=images/']
      },

      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000[name].[ext]&outputPath=fonts/' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader?name=[name].[ext]&outputPath=fonts/' },

      // Use one of these to serve jQuery for Bootstrap scripts:

    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    hot: true,
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Mocah Bokeh',
        filename: './index.html',
        hash: true,
        template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename:"css/[name].css",
      disable: !isProd,
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })

  ]
}
