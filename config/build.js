const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    // 解析后缀名
    extensions: [".js", ".jsx", ".ts", ".vue", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
  },
  devServer: {
    // 热更新
    hot: true, // only: 错误回退热更新
    port: 7777,
    open: true,
    // liveReload: false,
    static: {
      // 设置静态资源根目录
      directory: path.join(__dirname, "../abc"),
      // 静态资源公共路径（建议和output.publicPath一致）
      publicPath: "/",
    },
    // history模式下页面回调 ->默认index.html
    historyApiFallback: true,
    // 代理
    proxy: {
      "/api": {
        // 目标地址
        target: "localhost:2222",
        // 地址重写
        pathRewrite: {
          "^/api": "",
        },
        // HTTPS证书验证
        secure: false,
        // 覆盖host的来源
        changeOrigin: true,
      },
    },
  },
  devtool: "hidden-source-map",
  // 可以为相对路径或绝对路径
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    // 输出目录，必须为绝对路径
    path: path.resolve(__dirname, "../dist"),
    // 输出文件名
    filename: "js/main.js",
    // bundle公共路径
    publicPath: "/",
  },
  module: {
    rules: [
      // Rule对象
      // jsx js
      {
        test: /\.jsx?$/,
        // 排除
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // ['@babel/preset-env',{target: 'chrome 88'}]
              ],
              plugins: [
                // '@babel/plugin-transform-arrow-functions',
                // '@babel/plugin-transform-block-scoping'
              ],
            },
          },
          {
            loader: "eslint-loader",
          },
        ],
      },
      // ts
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      // vue
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
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
      // less
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 后方需要重新loader的数量
              importLoaders: 2,
              // 启用commonjs语法
              esModule: false,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
      },
      // 图片
      {
        test: /\.(jpe?g|png|gif)$/,
        // webpack5配置
        // type: 'asset/resource', // file-loader

        // asset/resource 配置
        // generator:{
        //   filename: '[name].[hash:6][ext]',
        //   // 拼接路径
        //   publicPath: './dist/img/',
        //   // 输出路径
        //   outputPath: 'img',
        // }

        // type: 'asset/inline', // url-loader

        type: "asset", // 自动判断大小打包
        // asset配置
        generator: {
          filename: "[name].[hash:6][ext]",
          // 拼接路径
          publicPath: "./img/",
          // 输出路径
          outputPath: "img",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 4kb
          },
        },

        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8 * 1024,
        //       // 拼接路径
        //       publicPath: './dist/img',
        //       // 输出路径
        //       outputPath: 'img',
        //       // 文件名称占位符
        //       name: '[name].[hash:6].[ext]'
        //     }
        //   }
        // ]
      },
      // 字体文件
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        type: "asset/resource",
        generator: {
          outputPath: "font/",
          filename: "[name].[hash:6][ext]",
          publicPath: "./font/",
        },
      },
    ],
  },
  plugins: [
    // 删除构建文件
    new CleanWebpackPlugin(),
    // index模板
    new HtmlWebpackPlugin({
      title: "test",
      template: "./public/index.html",
    }),
    // 定义全局变量
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    // 复制根目录下的文件
    new CopyPlugin({
      patterns: [
        {
          // 目录
          from: "public",
          globOptions: {
            // 忽略
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
    // vue必须
    new VueLoaderPlugin(),
    // react热更新
    new ReactRefreshWebpackPlugin(),
  ],
};
