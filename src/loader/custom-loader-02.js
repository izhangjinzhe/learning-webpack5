const babel = require("@babel/core");

module.exports = function (content) {
  // 异步
  const callback = this.async();
  // 获取配置
  const options = this.getOptions();
  // 转译
  babel.transform(content, options, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code);
    }
  });

  // console.log("自定义loader02");
  // return "自定义loader02";
};
module.exports.pitch = () => {
  console.log("pitchloader02");
};
