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
    module: {
      rules: [
        // css
        {
          test: /\.css$/,
          // 简写
          // loader: 'css-loader',
          use: [
            // Use对象,从后往前，从右往左
            // 简写
            "style-loader",
            {
              loader: "css-loader",
              options: {
                // 后方需要重新loader的数量
                importLoaders: 1,
                // 启用commonjs语法
                esModule: false,
              },
            },
            // 单独抽离文件
            // {
            //   loader: 'postcss-loader',
            //   options: {
            //     postcssOptions:{
            //       plugins:[
            //         // require('autoprefixer'),
            //         require('postcss-preset-env') // 包含autoprefixer
            //       ]
            //     }
            //   }
            // }
            "postcss-loader",
          ],
        },
      ],
    },
    plugins: [
      // react热更新
      new ReactRefreshWebpackPlugin(),
    ],
  },
  baseConfig
);
