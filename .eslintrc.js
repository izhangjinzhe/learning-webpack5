module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  // 继承prettier
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["react"],
  rules: {
    "import/extensions": 0,
    "no-console": 0,
    "func-names": 0,
    "import/no-import-module-exports": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
  },
};
