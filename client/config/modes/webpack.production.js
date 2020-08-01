

var CompressionPlugin = require('compression-webpack-plugin');


console.log("You're currently running webpack production...");


module.exports = () => ({
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: "gzip"
    })
  ]
});