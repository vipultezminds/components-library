const path = require('path');

module.exports = {
  entry: './src/index.js', // Make sure this points to your entry file in the src/ directory
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Adjust the output filename if needed
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'production', // Change to 'development' if you are in development mode
};
