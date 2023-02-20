const presets = [
  // 使用未来特性
  [
    "@babel/preset-env",
    {
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
    },
  ],
  // react编译
  ["@babel/preset-react"],
  // ts编译
  // ["@babel/preset-typescript"],
];
let plugins = [];

console.log(process.env.development, process.env.production);

if (process.env.development) {
  plugins = plugins.concat([
    // babel沙盒编译
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
      },
    ],
    // ["react-refresh/babel"],
  ]);
} else {
  plugins = plugins.concat([
    // babel沙盒编译
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
      },
    ],
  ]);
}
module.exports = {
  presets,
  plugins,
};
