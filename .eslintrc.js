module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // 继承prettier
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "import/extensions": 0,
    "no-console": 0,
    "func-names": 0,
  },
};
