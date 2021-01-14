const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest/setup.ts'],
  transformIgnorePatterns: [],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    'test-utils': '<rootDir>/jest/test-utils',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
