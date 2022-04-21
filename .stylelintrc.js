// @ts-check

/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'scss/at-extend-no-missing-placeholder': null,
  },
  ignoreFiles: ['node_modules/**', 'dist/**', 'packages/*/node_modules/**'],
};

module.exports = config;
