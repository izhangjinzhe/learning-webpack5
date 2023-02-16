// ESModule
// css less
// import "./abc/component.abc";

// CommonJS
// import multiple from "./abc/commonjs.abc";

// const esModule = require("./abc/esmodule.abc");

// console.log(esModule.default(1, 2), esModule.a());
// console.log(multiple.multiple(3, 4));

// 测试HMR
// if (module.hot) {
//   module.hot.accept("./abc/esmodule.abc");
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
import "./react/react_main.jsx";

// 测试typesctipt
// import './ts/ts_main.ts'

// 测试vue
import "./vue/vue_main.js";

// 引入js要手动判断更新（cli环境不需要）
if (module.hot) {
  module.hot.accept("./react/react_main.jsx");
  module.hot.accept("./vue/vue_main.js");
}
