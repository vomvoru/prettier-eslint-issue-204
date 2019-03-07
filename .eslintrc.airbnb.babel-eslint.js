module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
  },
};