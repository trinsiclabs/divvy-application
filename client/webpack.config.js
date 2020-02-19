const isDev = process.env.NODE_ENV !== 'production';
const outputPath = __dirname + '/../server/public/app';

module.exports = {
  entry: [
    './index.js',
  ],

  output: {
    path: outputPath,
    publicPath: isDev ? 'http://localhost:3001/' : '/app/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
  },

  devtool: isDev ? 'source-map' : false,

  devServer: {
    hot: true,
    contentBase: outputPath,
    host: '0.0.0.0',
    port: 3001,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
    ],
  },
};
