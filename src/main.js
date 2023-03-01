// css less
// import "./js/component.js";

// CommonJS
import multiple from "./js/commonjs.js";

// 测试md-loader
import md from "./md/md.md";

document.body.innerHTML = md;

// import(/* webpackChunkName: "commonjs" */ "./js/commonjs.js").then((res) => {
//   console.log(res, "commonjs");
// });
// const esModule = require("./js/esmodule.js");

// ESModule
// import { a } from "./js/esmodule.js";
// import "./js/treeshaking";
//
// console.log(a());
// console.log(multiple.multiple(3, 4));

// 测试HMR
// if (module.hot) {
//   module.hot.accept("./js/esmodule.js");
// }

// 测试babel
// const str = '123'
// const fun = (str)=> {
//   return str
// }
// fun(str)
// const promise = new Promise(()=>{})

// 测试sourcemap
// console.log(abd);

// 测试react
// eslint-disable-next-line import/no-import-module-exports
// import "@/react/react_main";

// 测试typesctipt
// import './ts/ts_main.ts'

// 测试vue
// import "@/vue/vue_main";

// 引入js要手动判断更新（cli环境不需要）
// if (module.hot) {
//   module.hot.accept("./react/react_main");
//   module.hot.accept("./vue/vue_main");
// }
