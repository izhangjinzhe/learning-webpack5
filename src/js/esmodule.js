import _ from "loadsh";

const esmodule = (a, b) => a + b;

export const a = function () {
  console.log(_.add("es", "module"));
  return 1 + 1;
};

export default esmodule;
