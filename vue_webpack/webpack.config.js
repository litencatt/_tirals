module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: []
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  }
};
