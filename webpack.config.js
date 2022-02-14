const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  mode: 'development',
  stats: {
    errorDetails: true
  },
  entry: {
    index: './src/pug/starter.pug'
  },
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/',
    clean: {
      keep: /assets\/img\//
    }
  },
  plugins: [new PugPlugin()],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          method: 'render'
        }
      }
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: false
    },
    watchFiles: {
      paths: ['src/pug/**/*.pug'],
      options: {
        usePolling: false
      }
    },
    static: {
      directory: path.join(__dirname, '../public')
    },
    port: 3000,
    open: true
  }
};
