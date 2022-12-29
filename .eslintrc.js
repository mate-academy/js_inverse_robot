module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    "no-console": "off",
    'no-proto': 0,
  },
  plugins: ['jest']
};
