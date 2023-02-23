// eslint-disable-next-line import/no-extraneous-dependencies
// import $ from "jquery";
import _ from "loadsh";

const esmodule = (a, b) => a + b;

export const a = function () {
  // eslint-disable-next-line no-undef
  console.log($);
  console.log(_.add("es", "module"));
  return 1 + 1;
};

export default esmodule;
