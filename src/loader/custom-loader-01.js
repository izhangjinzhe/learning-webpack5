const schema = require("./schema.json");
module.exports = function (content) {
  console.log("自定义loader01", this.data.value);
  // 同步loader
  // 1.
  // this.callback(null, content);
  // 2.
  // return "自定义loader01";

  // 获取传入的参数
  const options = this.getOptions(schema);
  console.log(options);
  // 异步loader
  const callback = this.async();
  callback(null, content);
};
// pitch会在执行前顺序执行，可以
module.exports.pitch = (remainingRequest, precedingRequest, data) => {
  // 共享数据
  data.value = 2;
  console.log("pitchloader01");
};
