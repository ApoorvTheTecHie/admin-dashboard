
var config = {
   entry: './src/index.js',
   output: {
      path:'/',
      filename: 'bundle.js',
   },
   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true  
   },
   module: {
      loaders: [
         {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         }, {
        test: /\.(scss|css)$/,
        loaders: [
          "style-loader", "css-loader", "sass-loader"
        ]
      }
      ]
   }
}
module.exports = config;
