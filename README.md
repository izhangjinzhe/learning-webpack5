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

用于在构建前删除构建文件。

### html-webpack-plugin的使用([v1.1.2](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.1.2))

用于定义html模板。

### DefinePlugin的使用([v1.1.3](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.1.3))

webpack内置，用于定义全局变量，注意字符串格式。

### copy-webpack-plugin的使用([v1.1.4](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.1.4))

用于复制根目录下的文件，注意高版本下的api配置问题。

### webpack打包后内部结构([v1.1.5](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.1.5))

[语雀文档](https://www.yuque.com/izhangjinzhe/developer/ygvm72gncn5kae2d)

### source-map的使用([v1.1.6](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.1.6))
1. false：不生成source-map
2. source-map：生成source-map独立文件
3. eval-source-map：source-map以DataUrl添加到eval函数后面
4. inline-source-map：source-map以DataUrl添加到bundle文件最后
5. cheap-source-map：低开销的的source-map，没有生成列映射
6. cheap-module-source-map:同上，对loader也会简化
7. hidden-source-map：删除对source-map的引用
8. nosource-source-map：有提示，但是删除对源代码的映射
9. 语法`[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map`
5. [文档](https://webpack.docschina.org/configuration/devtool/#root)

### babel的使用([v1.1.7](https://gitee.com/izhangjinzhe/learnwebpack/tree/v1.1.7))
[文档](https://babel.docschina.org/)  
Babel 是一个工具链，主要用于在当前和旧的浏览器或环境中，将 ECMAScript 2015+ 代码转换为 JavaScript 向后兼容版本的代码。
- `@babel/core`：babel核心包，微内核，实现功能需安装插件
- `@babel/cli`：babel命令行工具  
- `@babel/preset-env`：一个智能预设，它允许您使用最新的JavaScript
- `babel ./src/main.js --out-dir ./src/babel --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping`
#### 原理
源代码 -> 词法分析 -> tokens -> 语法分析 -> AST -> 遍历 -> 访问 -> 应用插件 -> 新AST -> 生成新代码  

[文档](https://github.com/jamiebuilds/the-super-tiny-compiler)

#### babel-loader
webpack中调用`@babel-core`的工具，可调用`.browerslistrc`配置文件转换，

#### 废弃Stage-X预设
[文档](https://babel.docschina.org/docs/en/presets/#stage-x-%E5%AE%9E%E9%AA%8C%E6%80%A7%E9%A2%84%E8%AE%BE) 

#### polyfill
向后兼容javascript语法
[配置](https://github.com/zloirock/core-js#babelpolyfill)
- `@babel/polyfill`：_已废弃_
- `useBuiltIns: false`：停用
- `useBuiltIns: 'usage'`：根据项目里使用的引入
- `useBuiltIns: 'entry'`：根据目标环境的引入（需引入`regenerator runtime`和`core-js`）

####  @babel/plugin-transform-runtime

假如你开发的代码需要被别人使用，那么使用useBuiltIns可能会造成全局变量污染。
使用`@babel/plugin-transform-runtime`可将代码创建沙盒环境执行。

#### 处理react
`@babel/preset-react`可以直接处理jsx

#### 处理typescript
- `typescript`：tsc命令，ts的编译器。
- `ts-loader`：调用tsc的loader
- 使用`tsc --init`生成tsconfig.json
- _ts默认没有polyfill，使用@babel/preset-typescript预设解决。_
  - babel负责转换，tsc负责检查（以命令行的形式）

#### ESLint
静态代码分析工具 [文档](http://eslint.cn/)  

`eslint --init`生成配置文件

