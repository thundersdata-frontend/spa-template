module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'no-console': 0,
    'global-require': 0,
    'no-param-reassign': 0,
    'symbol-description': 0,
    'no-unused-expressions': 'off',
    'max-classes-per-file': 0,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
  },
};
