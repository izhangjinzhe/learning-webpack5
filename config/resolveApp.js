const path = require("path");

// 获取当前执行目录
const dir = process.cwd();

const resolveApp = function (p) {
  // 拼接路径
  return path.resolve(dir, p);
};
module.exports = resolveApp;
