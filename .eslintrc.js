module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'max-len': [2, 145, 4],
  },
  globals: {
    logger: false,
  },
};
