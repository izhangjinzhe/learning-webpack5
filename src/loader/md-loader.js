const marked = require("marked");

module.exports = function (content) {
  const callback = this.async();
  // 方法2，将html作为模块导出
  const str = `\`${marked.parse(content)}\``;
  const code = `var a = ${str}; export default a`;
  callback(null, code);
};
