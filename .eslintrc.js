module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/class-name-casing': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'symbol-description': 0,
    'no-unused-expressions': 0
  }
};
