const path = require('path');

module.exports = [
  // Main process
  {
    mode: 'development',
    entry: './src/main.ts',
    target: 'electron-main',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  },
  // Preload process
  {
    mode: 'development',
    entry: './src/preload.ts',
    target: 'electron-preload',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'preload.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  },
  // Renderer process
  {
    mode: 'development',
    entry: './src/renderer.ts',
    target: 'electron-renderer',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'renderer.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  }
];