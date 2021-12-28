const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )
const CopyPlugin = require( "copy-webpack-plugin" );
const TerserJSPlugin = require( 'terser-webpack-plugin' )
const CssMinimizerPlugin = require( "css-minimizer-webpack-plugin" );
const path = require( 'path' )

const options = {
  mode: 'production', //告知 webpack 使用相应模式的内置优化。
  entry: './src/index.js',
  output: {
    path: path.resolve( __dirname, './dist' ),
    filename: 'zhangjinzhe.js'
  },
  module: {
    rules: [
      {
        test: /(.js)$/,
        use: 'babel-loader'
      },
      {
        test: /(.scss|.sass)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ] // 从右往左解析
      },
      {
        test: /(.jpeg)$/,
        use: [ {
          loader: 'url-loader',
          options: {
            limit: 1000 // 小于这个值的被编译为base64,大于等于则复制
          }
        } ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin(), // 代码压缩
      new CssMinimizerPlugin(), // css压缩
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(), // 进度
    new CleanWebpackPlugin(), // 清理构建文件
    new webpack.HotModuleReplacementPlugin(), // 热更新
    new HtmlWebpackPlugin( { template: './src/index.html' } ), // 设置html模板
    new CopyPlugin( { // 复制静态文件
      patterns: [
        {
          from: './src/assets', // 入口
          to: 'assets' // 出口
        }
      ]
    } ),
    new MiniCssExtractPlugin( { // css压缩规则
      filename: "[name].css",
      chunkFilename: "[id].css"
    } )
  ],
  devServer: { // 启动服务
    hot: true
  }
}

module.exports = options
