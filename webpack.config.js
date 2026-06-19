const path = require('path');

module.exports = {
  mode: 'development', // or 'production' for production builds
  entry: './index.js', // or './src/index.js' if you have src folder
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Add other configuration as needed
};