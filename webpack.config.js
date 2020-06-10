const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        options: {
          presets: ['@babel/preset-env',
            '@babel/react', {
              'plugins': ['@babel/plugin-proposal-class-properties']
            }]
        },
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico'
    })
  ],
};
