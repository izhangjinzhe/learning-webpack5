// ESModule
const esmodule = require("./js/esmodule.js");
// import './js/component'

// CommonJS
import multiple from './js/commonjs'
const str = '123'
const fun = (str)=> {
  return str
}
fun(str)
console.log(abd)

console.log(esmodule.default(1,2), esmodule.a())

console.log(multiple.multiple(3,4))
