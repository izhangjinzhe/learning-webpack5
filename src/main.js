// ESModule
const esModule = require('./js/esmodule.js');

// css less
// import './js/component'

// CommonJS
// import multiple from './js/commonjs'

// 测试babel
// const str = '123'
// const fun = (str)=> {
//   return str
// }
// fun(str)
// const promise = new Promise(()=>{})
console.log(esModule.default(1, 2), esModule.a());
// console.log(multiple.multiple(3,4))

// 测试sourcemap
// console.log(abd);

// 测试react
// import './react/react_main.jsx'

// 测试typesctipt
// import './ts/ts_main.ts'
