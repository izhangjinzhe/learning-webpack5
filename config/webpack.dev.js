const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

process.env.development = "true";

module.exports = merge(
  {
    mode: "development",
    devServer: {
      // 热更新
      hot: true, // only: 错误回退热更新
      port: 7777,
      open: true,
      // liveReload: false,
      // static: {
      //   // 设置静态资源根目录
      //   directory: resolveApp("./abc"),
      //   // 静态资源公共路径（建议和output.publicPath一致）
      //   publicPath: "./",
      // },
      // history模式下页面回调 ->默认index.html
      // historyApiFallback: true,
      // 代理
      // proxy: {
      //   "/api": {
      //     // 目标地址
      //     target: "localhost:2222",
      //     // 地址重写
      //     pathRewrite: {
      //       "^/api": "",
      //     },
      //     // HTTPS证书验证
      //     secure: false,
      //     // 覆盖host的来源
      //     changeOrigin: true,
      //   },
      // },
    },
    plugins: [
      // react热更新
      new ReactRefreshWebpackPlugin(),
    ],
  },
  baseConfig
);
