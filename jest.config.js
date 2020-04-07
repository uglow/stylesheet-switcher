// Coverage only shows for Vue components that have data, methods, or computed properties
// See https://github.com/vuejs/vue-cli/issues/1879#issuecomment-412300256

module.exports = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'svelte'],
  testMatch: ['<rootDir>/src/**/*.spec.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  testEnvironment: 'jsdom',
  automock: false,

  reporters: ['default'],

  collectCoverageFrom: ['src/**/*.svelte'],
  coverageReporters: ['lcov', 'json-summary', 'html', 'text', 'text-summary'],
  coverageDirectory: '<rootDir>/test-reports/coverage',
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 0, // For some reason, Svelte doesn't measure this correctly
      lines: 70,
    },
  },
};
