class AutoUpload {
  constructor(options) {
    // 获取参数
    this.options = options;
  }

  // 注册apply
  apply(compiler) {
    // 监听事件
    compiler.hooks.afterEmit.tapAsync("AutoUpload", (compilation, callback) => {
      console.log(this.options);
      // 回调成功
      callback();
    });
  }
}

module.exports = AutoUpload;
