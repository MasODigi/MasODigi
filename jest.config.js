module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  testMatch: ['**/tests/**/*.test.js'],
  transform: {
    //"^.+\\.(ts|tsx)$": "ts-jest",
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
    '\\.ya?ml$': 'yaml-jest',
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  restoreMocks: true,
  testEnvironment: 'jest-environment-jsdom-global',
};
