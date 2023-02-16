const express = require("express");
const config = require("./config/build.js");

const middleware = require("webpack-dev-middleware");

const app = express();

const webpack = require("webpack");

// 编译配置文件
const compiler = webpack(config);

// 获取配置文件
const m = middleware(compiler);

// 使用
app.use(m);
app.listen(3333, () => {
  console.log("已启动");
});
