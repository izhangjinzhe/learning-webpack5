module.exports = {
  presets: [
    ['@babel/preset-env',{
      // false 不使用
      // usage 需要什么引入什么
      // entry 根据目标环境引入
      // useBuiltIns: 'usage',
      // 指定版本
      // corejs: {
      //   version: '3.27',
      //   // 提案阶段
      //   proposals: true
      // }
    }],
    // react编译
    ['@babel/preset-react'],
    ['@babel/preset-typescript']
  ],
  plugins: [
    // babel沙盒编译
    ["@babel/plugin-transform-runtime",{
      corejs: 3
    }]
  ]
}
