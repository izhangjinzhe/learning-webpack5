"use strict";

var _commonjs = _interopRequireDefault(require("./abc/commonjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// ESModule
var esmodule = require("./abc/esmodule.abc");
// import './abc/component'

// CommonJS

var str = '123';
var fun = function fun(str) {
  return str;
};
fun(str);
console.log(abd);
console.log(esmodule.default(1, 2), esmodule.a());
console.log(_commonjs.default.multiple(3, 4));
