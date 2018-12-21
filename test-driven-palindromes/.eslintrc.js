// .eslintrc.js
module.exports = {
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true,
  },
};