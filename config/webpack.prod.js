const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require("./webpack.base");

process.env.production = "true";

module.exports = merge(
  {
    mode: "production",
    // 排除
    externals: {
      loadsh: "_",
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
            {
              loader: MiniCssExtractPlugin.loader,
              // options: {
              //   publicPath: "../",
              // },
            },
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
      new CleanWebpackPlugin(),
      // 抽离css
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash:4].[].css",
      }),
    ],
  },
  baseConfig
);
