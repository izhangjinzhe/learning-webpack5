const path = require("path");
module.exports = {
  // 可以为相对路径或绝对路径
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    // 必须为绝对路径
    path: path.resolve(__dirname, '../dist'),
    // 输出文件名
    filename: "main.js"
  },
  module:{
    rules: [
      // Rule对象
      {
        test: /\.css$/,
        // 简写
        // loader: 'css-loader',
        use: [
          // Use对象,从后往前，从右往左
          // 简写
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 后方需要重新loader的数量
              importLoaders: 1,
              // 启用commonjs语法
              esModule: false
            }
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
          'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 后方需要重新loader的数量
              importLoaders: 2,
              // 启用commonjs语法
              esModule: false
            }
          },
          'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // 设置路径
              publicPath: './dist'
            }
          }
        ]
      }
    ]
  }
}
