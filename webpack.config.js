const path = require('path');
const workboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-react-jsx'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new workboxPlugin.GenerateSW({
      swDest: 'worker.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: '/.*',
          handler: 'NetworkFirst',
        },
      ],
      exclude: [],
    }),
  ],
};
