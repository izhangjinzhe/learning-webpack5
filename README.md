# 深入学习webpack5

## webpack和webpack-cli的关系
cli不是必须的，他只是处理webpack命令及参数，现在框架基本都是用自己的cli。

## 为什么使用webpack
浏览器不支持commonjs，旧版浏览器不支持esmodule，一些js语法问题及代码压缩、混淆等，处理这些问题要是用webpack

## 学习进程

### 搭建webpack环境，简单模拟不同引入方式([v1.0.0](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.0))

### 配置文件的简单使用([v1.0.1](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.1))

### 配置文件重构重命名([v1.0.2](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.2))

### css-loader的使用([v1.0.3](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.3))
编译css文件。行内模式（不常用）、cli模式（已废弃）、配置文件模式（常用）。  

加载其他loader重新编译：`importLoaders`

### style-loader的使用([v1.0.4](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.4))
创建style标签，将编译后的css插入。顺序：后到前、右到左。

### less-loader的使用([v1.0.5](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.5))
可单独使用lessc命令。  

`lessc ./src/css/component.less ./src/css/component1.css`  

编译less文件。

### browserslist的使用([v1.0.6](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.6))
设置浏览器兼容性供其他工具舒勇。配置文件形式、packagejson形式。使用caniuse-lite查询，[文档](https://github.com/browserslist/browserslist#readme)  

 查询适配的浏览器  
`browserslist '>1%, last 2 version'`

### postcss的使用([v1.0.7](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.7))

可单独使用postcss命令，也可配置文件使用。需结合其他插件实现其他功能。

`postcss --use autoprefixer -o ./src/css/postcss1.css ./src/css/postcss.css`

- autoprefixer: 加前缀
- postcss-preset-env(包含autoprefixer): 使用未来特性

### file-loader的使用([v1.0.8](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.8))

处理图片资源，以图片为模块处理到静态文件夹。注意高版本default、esModule等配置问题。

### url-loader的使用([v1.0.9](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.0.9))

同file-loader差不多，小图片可以转换base64。

### asset_module_type的使用([v1.1.0](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.1.0))
webpack5内部集成静态资源打包  
- asset/resource: file-loader（处理图片，字体等文件）
- asset/inline: url-loader（图片转换base64）
- asset: 可自动判断图片大小（url-loader）

### clean-webpack-plugin的使用([v1.1.1](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.1.1))

用于在构建前删除构建文件

