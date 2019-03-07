module.exports = {
  extends: ['airbnb'],
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
    // mono repo 방식을 써서 제대로 동작하지 않는 eslint 규칙 임시로 비활성화.
    'import/no-extraneous-dependencies': 'off',
    // eslint 파일이 있는곳을 기준으로 package 여부를 확인하기 때문에 임시로 비활성화.
    'import/no-unresolved': 'off',
  },
};


//   "parserOptions": {
//     "ecmaVersion": 2018,
//     "sourceType": "module"
// }