const _ = require("loadsh");

const commonjs = (a, b) => {
  console.log(_.add("common", "js"));
  return a * b;
};

module.exports = {
  multiple: commonjs,
};
