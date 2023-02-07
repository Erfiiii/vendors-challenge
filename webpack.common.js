const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[c|a]ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: "css-modules-typescript-loader"
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
            }
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext][query]',
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
