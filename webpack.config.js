const DEV = process.env.NODE_ENV !== 'production';
const devServer = process.env.NODE_ENV === 'develop';

const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const appPath = `${path.resolve(__dirname)}`;

// App
const appFullPath = `${appPath}/app`;
const appEntry = `${appFullPath}/assets/application.js`;
const appOutput = `${appFullPath}/dist/`;

// Outputs
const outputJs = 'assets/scripts/[name].js';
const outputCss = 'assets/styles/[name].css';
const outputFile = '[name].[ext]';
const outputImages = `./assets/images/${outputFile}`;
const outputFonts = `assets/fonts/${outputFile}`;

const allModules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: [/node_modules/]
    },
    {
      test: /\.json$/,
      use: 'json-loader'
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      use: `file-loader?name=${outputImages}`,
      exclude: [/fonts/]
    },
    {
      test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
      use: `file-loader?name=${outputFonts}`,
      exclude: [/images/]
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      })
    }
  ]
};

const allPlugins = [
  new CleanWebpackPlugin([appOutput]),
  new ExtractTextPlugin(outputCss),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'develop')
    }
  }),
  new HtmlWebpackPlugin({
    template: 'app/public/index.html'
  }),
  new webpack.optimize.ModuleConcatenationPlugin()
];

const devServerConfig = {
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

// Use only for production build
if (!DEV) {
  allPlugins.push(
    new UglifyJSPlugin({
      comments: false,
      sourceMap: true
    })
  );
}

module.exports = [

  // Theme Skin
  {
    context: path.join(__dirname),
    entry: {
      app: [appEntry]
    },
    output: {
      path: appOutput,
      publicPath: devServer ? 'http://127.0.0.1:8080/' : '',
      filename: outputJs
    },

    devServer: devServerConfig,

    module: allModules,

    plugins: allPlugins
  }
];
