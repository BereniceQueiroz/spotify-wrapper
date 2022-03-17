const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js', // arquivo que será executado
  },
  output: {
    filename: 'bundle.js', // arquivo que será gerado  com o min
    path: path.resolve(__dirname, './public'),
  },
  devServer: {
    // levantar o servidor local, informar nome pasta
    static: {
      directory: path.join(__dirname, './public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};
