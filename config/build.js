const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const glob = require("glob");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const resolveApp = require("./resolveApp");

const smp = new SpeedMeasurePlugin();

// 函数模式，接受命令行--env
module.exports = function (env) {
  const isProd = env.production;
  console.log(isProd);
  // 查看各个阶段构建速度
  // smp.wrap(config)
  return {
    mode: isProd ? "production" : "development",
    resolve: {
      // 解析后缀名
      extensions: [".js", ".jsx", ".ts", ".vue", ".json"],
      alias: {
        "@": resolveApp("./src"),
      },
    },

    resolveLoader: {
      // 设置自定义loader路径
      modules: ["node_modules", resolveApp("./src/loader/")],
    },
    optimization: {
      // trtee-shaking添加无用标记
      usedExports: true,
      // 压缩代码
      minimize: false,
      minimizer: [
        // 压缩css
        new CssMinimizerPlugin(),
        new TerserPlugin({
          // 单独抽离注释
          extractComments: true,
          // cpu多核构建
          parallel: true,
          // terser配置项
          terserOptions: {
            keep_fnames: true,
          },
        }),
      ],
      // 运行时相关代码打包
      runtimeChunk: {
        name: "runtime",
      },
      chunkIds: "natural", // natural 自然数， named 对调试更友好的可读的 id，deterministic 在不同的编译中不变的短数字 id。有益于长期缓存。在生产模式中会默认开启，size 让初始下载包大小更小的数字 id，total-size 让总下载包大小更小的数字 id
      splitChunks: {
        chunks: "all", // async 异步，initial 非异步
        minSize: 20, // 生成 chunk 的最小体,默认 20000
        maxSize: 20, // 将大于 maxSize 个字节的 chunk 分割成不小于minSize的 chunks
        minChunks: 1, // 至少被引入几次
        // 缓存组（细颗粒度控制）
        cacheGroups: {
          // 匹配规则
          loadsh: {
            test: /[\\/]node_modules[\\/](loadsh)[\\/]/,
            filename: "js/[id].loadsh.js",
            chunks: "all",
          },
          // 可匹配文件
          commonjs: {
            test: /commonjs/,
            filename: "js/[name].commonjs.js",
            chunks: "all",
          },
        },
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
        directory: resolveApp("./abc"),
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
    devtool: "source-map",
    // 可以为相对路径或绝对路径，相对路径下需配置context基础路径
    // entry: resolveApp("./src/main.js"),
    entry: "./src/main.js",
    // 多入口
    // entry: {
    //   es: {
    //     import: resolveApp("./src/js/esmodule.js"),
    //     dependOn: ["loadsh"],
    //   },
    //   cm: {
    //     import: resolveApp("./src/js/commonjs.js"),
    //     dependOn: ["loadsh"],
    //   },
    //   main: {
    //     import: resolveApp("./src/main.js"),
    //   },
    //   loadsh: "loadsh",
    // },
    // 基础路径，绝对路径，默认node执行路径
    context: resolveApp("./"),

    output: {
      // 输出目录，必须为绝对路径
      path: resolveApp("./dist"),

      // 输出文件名
      filename: "js/[name].bundle.js",

      // bundle公共路径
      // publicPath: "/",

      // 使用魔法注释的name
      chunkFilename: "js/[name].[hash:6].chunk.js",
    },
    module: {
      rules: [
        // Rule对象
        // 自定义loader
        // {
        //   test: /\.js$/,
        //   use: [
        //     {
        //       loader: "custom-loader-01",
        //       options: { name: "zhang", age: 18 },
        //     },
        //   ],
        // },
        {
          test: /\.md$/,
          use: [
            // 方法1，使用html-loader
            // {
            //   loader: "html-loader",
            // },
            {
              loader: "md-loader",
            },
          ],
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: "custom-loader-02",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          ],
          // 提前执行
          enforce: "pre",
        },

        // {
        //   test: /\.js$/,
        //   use: ["custom-loader-03"],
        // },
        // jsx js
        // {
        //   test: /\.jsx?$/,
        //   // 排除
        //   exclude: /node_modules/,
        //   use: [
        //     {
        //       loader: "babel-loader",
        //       options: {
        //         presets: [
        //           // ['@babel/preset-env',{target: 'chrome 88'}]
        //         ],
        //         plugins: [
        //           // '@babel/plugin-transform-arrow-functions',
        //           // '@babel/plugin-transform-block-scoping'
        //         ],
        //       },
        //     },
        //     {
        //       loader: "eslint-loader",
        //     },
        //   ],
        // },
        // // ts
        // {
        //   test: /\.ts$/,
        //   exclude: /node_modules/,
        //   use: [
        //     {
        //       loader: "babel-loader",
        //     },
        //   ],
        // },
        // // vue
        // {
        //   test: /\.vue$/,
        //   use: [
        //     {
        //       loader: "vue-loader",
        //     },
        //   ],
        // },
        // // css
        // {
        //   test: /\.css$/,
        //   sideEffects: true,
        //   // 简写
        //   // loader: 'css-loader',
        //   use: [
        //     // Use对象,从后往前，从右往左
        //     // 简写
        //     MiniCssExtractPlugin.loader,
        //     {
        //       loader: "css-loader",
        //       options: {
        //         // 后方需要重新loader的数量
        //         importLoaders: 1,
        //         // 启用commonjs语法
        //         esModule: false,
        //       },
        //     },
        //     // 单独抽离文件
        //     // {
        //     //   loader: 'postcss-loader',
        //     //   options: {
        //     //     postcssOptions:{
        //     //       plugins:[
        //     //         // require('autoprefixer'),
        //     //         require('postcss-preset-env') // 包含autoprefixer
        //     //       ]
        //     //     }
        //     //   }
        //     // }
        //     "postcss-loader",
        //   ],
        // },
        // // less
        // {
        //   test: /\.less$/,
        //   use: [
        //     "style-loader",
        //     {
        //       loader: "css-loader",
        //       options: {
        //         // 后方需要重新loader的数量
        //         importLoaders: 2,
        //         // 启用commonjs语法
        //         esModule: false,
        //       },
        //     },
        //     "postcss-loader",
        //     "less-loader",
        //   ],
        // },
        // // 图片
        // {
        //   test: /\.(jpe?g|png|gif)$/,
        //   // webpack5配置
        //   // type: 'asset/resource', // file-loader
        //
        //   // asset/resource 配置
        //   // generator:{
        //   //   filename: '[name].[hash:6][ext]',
        //   //   // 拼接路径
        //   //   publicPath: './dist/img/',
        //   //   // 输出路径
        //   //   outputPath: 'img',
        //   // }
        //
        //   // type: 'asset/inline', // url-loader
        //
        //   type: "asset", // 自动判断大小打包
        //   // asset配置
        //   generator: {
        //     filename: "[name].[hash:6][ext]",
        //     // 拼接路径
        //     publicPath: "./img/",
        //     // 输出路径
        //     outputPath: "img",
        //   },
        //   parser: {
        //     dataUrlCondition: {
        //       maxSize: 8 * 1024, // 4kb
        //     },
        //   },
        //
        //   // use: [
        //   //   {
        //   //     loader: 'url-loader',
        //   //     options: {
        //   //       limit: 8 * 1024,
        //   //       // 拼接路径
        //   //       publicPath: './dist/img',
        //   //       // 输出路径
        //   //       outputPath: 'img',
        //   //       // 文件名称占位符
        //   //       name: '[name].[hash:6].[ext]'
        //   //     }
        //   //   }
        //   // ]
        // },
        // // 字体文件
        // {
        //   test: /\.(ttf|woff|woff2|otf)$/,
        //   type: "asset/resource",
        //   generator: {
        //     outputPath: "css/font/",
        //     filename: "[name].[hash:6][ext]",
        //     publicPath: "./font/",
        //   },
        // },
      ],
    },
    plugins: [
      //   // 删除构建文件
      //   new CleanWebpackPlugin(),
      //   // index模板
      new HtmlWebpackPlugin({
        title: "test",
        template: resolveApp("./public/index.html"),
        // 注入位置
        inject: "body",
        // 缓存
        cache: false,
        // 格式化相关
        minify: {
          collapseWhitespace: true,
          keepClosingSlash: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
      //   // 定义全局变量
      new DefinePlugin({
        BASE_URL: '"./"',
      }),
      //   // 复制根目录下的文件
      //   new CopyPlugin({
      //     patterns: [
      //       {
      //         // 目录
      //         from: resolveApp("./public"),
      //         globOptions: {
      //           // 忽略
      //           ignore: ["**/index.html"],
      //         },
      //       },
      //     ],
      //   }),
      //   // vue必须
      //   new VueLoaderPlugin(),
      //   // react热更新
      //   // new ReactRefreshWebpackPlugin(),
      //   // 自动加载模块
      //   new webpack.ProvidePlugin({
      //     $: "jquery",
      //     jQuery: "jquery",
      //   }),
      //   // 抽离css文件
      //   new MiniCssExtractPlugin({
      //     filename: "css/[name].[hash:4].css",
      //   }),
      //   // treeshaking css
      //   new PurgeCSSPlugin({
      //     // 路径
      //     paths: glob.sync(`${resolveApp("./src")}/**/*`, { nodir: true }),
      //     // 白名单
      //     safelist: ["list"],
      //   }),
      //   // 作用域提升
      //   new webpack.optimize.ModuleConcatenationPlugin(),
      //   // 压缩代码
      //   new CompressionPlugin({
      //     // 处理大于此大小的资源
      //     threshold: 0,
      //     // 匹配文件
      //     test: /\.(css|js)$/,
      //     // 压缩比
      //     minRatio: 0.8,
      //   }),
      //   // bundle注入index.html
      //   new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.bundle.js/]),
      //   // 构建后文件分析
      //   new BundleAnalyzerPlugin(),
    ],
  };
};
