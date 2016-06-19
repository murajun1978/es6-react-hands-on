module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  devServer: {
    inline: true,
    port: 5000
  }
}
