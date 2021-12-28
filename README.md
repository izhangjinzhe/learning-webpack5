### path相关API

- ' . '：表示当前工作目录
- `__dirname`: 当前模块(目录)的目录名.同`path.dirname()`
- `path.resolve([...path])`：将多个路径解析为绝对路径.  
  *从右向左。遇到绝对路径停止。没有绝对路径使用当前工作目录.*
- `path.join()`：将多个路径连接形成规范路径.

### loader相关

- `css-loader`：将 CSS 转化成 CommonJS 模块（字符串）
- `style-loader`：将css字符串写进style标签里并添加到页面上
- `sass-loader`：将 Sass 编译成 CSS
- `url-loader`：将小于limit的文件转化为base64存储，大于或等于limit的文件将参数传递给`file-loader`
- `file-loader`：将`import/require()`的文件解析为url，并复制到目标文件夹

### plugins相关

- `html-webpack-plugin`：使用html模板
- `mini-css-extrac-plugin`：将每个引入的css分成不同的file（需修改loader配置）
- `copy-webpack-plugin`：复制静态资源
- `clean-webpack-plugin`：清除构建后的文件
- `terser-webpack-plugin`：代替`uglifyjs-webpack-plugin`（已废弃）压缩js（v5自带）
- `css-minimizer-webpack-plugin`：代替`optimize-css-assets-webpack-plugin`（已废弃）压缩css

### 热更新

`webpack-dev-server`开启hot并引入`HotModuleReplacementPlugin`

### 环境相关

`process.env.NODE_ENV`：监测当前mode模式

