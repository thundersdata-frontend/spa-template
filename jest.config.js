module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest/setup.ts'],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    'test-utils': '<rootDir>/jest/test-utils.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  cacheDirectory: '.jest/cache',
};
