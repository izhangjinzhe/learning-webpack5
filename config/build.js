const path = require("path");
module.exports = {
  // 可以为相对路径或绝对路径
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    // 必须为绝对路径
    path: path.resolve(__dirname, '../bundle'),
    // 输出文件名
    filename: "bundle.js"
  },
  module:{
    rules: [
      // Rule对象
      {
        test: /\.css$/,
        use: [
          // Use对象
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  }
}
