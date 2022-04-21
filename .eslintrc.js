/** lib.es.5.d.ts */
const definedTypes = [
  'unknown',
  'Partial',
  'Required',
  'Readonly',
  'Pick',
  'Record',
  'Exclude',
  'Extract',
  'Omit',
  'NonNullable',
  'Parameters',
  'ConstructorParameters',
  'ReturnType',
  'InstanceType',
  'ThisType',
];

module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    es2020: true,
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
      tagNamePreference: {
        return: 'returns',
      },
    },
  },
  plugins: ['jest', 'jsdoc'],
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:jsdoc/recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'jsdoc/no-undefined-types': ['warn', { definedTypes }],
    'jsdoc/check-tag-names': ['error', { definedTags: ['jest-environment'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'jsdoc/require-property-description': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'vue/multi-word-component-names': 'off',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    requireConfigFile: false,
  },
  ignorePatterns: ['node_modules/*', '**/node_modules/*', 'dist/*'],
};
