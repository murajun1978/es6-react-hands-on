var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  },
  devServer: {
    inline: true,
    port: 5000,
    hot: true,
    historyApiFallback: true
  }
}
