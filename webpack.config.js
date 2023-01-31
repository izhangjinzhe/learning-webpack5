const path = require("path");
module.exports = {
  // 可以为相对路径
  entry: './src/main.js',
  output: {
    // 必须为绝对路径
    path: path.resolve(__dirname, './bundle'),
    // 输出文件名
    filename: "bundle.js"
  }
}
