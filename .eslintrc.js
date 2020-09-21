module.exports = {
  rules: {
    //只有一个await时，设置忽略
    "require-atomic-updates": "off"
  },
  extends: "eslint:recommended",
  // globals: [{}],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  //屏蔽import
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module"
  }
};
