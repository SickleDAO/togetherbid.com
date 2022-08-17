module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    babelOptions: {
      parserOpts: {
        plugins: ['jsx']
      }
    }
  },
  extends: ['standard', 'plugin:vue/recommended'],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'vue/singleline-html-element-content-newline': 'off'
  }
};
