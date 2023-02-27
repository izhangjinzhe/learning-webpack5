// 自定义编译

const webpack = require("webpack");
const config = require("./config/build")({
  production: true,
});

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stats);
  }
});
