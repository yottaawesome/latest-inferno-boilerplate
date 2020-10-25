const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => { 
  // We need to set this manually due to https://github.com/webpack/webpack/issues/7074
  // Note that official documentation at https://webpack.js.org/configuration/mode/ states the following:
  //      Sets process.env.NODE_ENV on DefinePlugin to value production . 
  // This is misleading, as printing the process.env.NODE_ENV variable out shows it is undefined,
  // causing the style-loader/minicssextractplugin rule to fail to behave as expected.
  let isDevelopment = (process.env.NODE_ENV = argv['mode']) !== 'production'

  return {
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[contenthash].[name].js'
    },

    devtool: 'source-map',

    resolve: {
      alias: {
          'inferno': isDevelopment ? 'inferno/dist/index.dev.esm.js' : 'inferno/dist/index.esm.js',
      },
    },

    devServer: {
      contentBase: './dist'
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        },
        // The following loader rules are necessary for s/css modules
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            { loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              // As of css-loader 4, the options have changed
              // https://github.com/webpack-contrib/css-loader
              options: {
                modules: {
                  localIdentName: '[folder]__[local]__[hash:base64:5]',
		              exportLocalsConvention: 'camelCase'
                }
              }
            },
            { loader: 'sass-loader'}
          ]
        },
        {
          test: /\.scss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                fallback: 'file-loader'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'main.css'
      }),
      new HTMLWebpackPlugin({
          template: path.join(__dirname, './src/index.html')
      })
    ]
  };
}
