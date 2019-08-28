const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.resolve(__dirname + '/components/index.js'),
  output: {
    library:'leafy-design-system',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'index.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname + '/dist/'),
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, './node_modules')],
    extensions: ['.js', '.jsx', '.vue', '.md'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: scssLoaders
      }
    ]
  },
  externals: {
    vue: 'vue'
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}