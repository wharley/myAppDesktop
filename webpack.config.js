module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  devServer: {
    contentBase: './public',
    compress: true,    
    port: 9000,
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
