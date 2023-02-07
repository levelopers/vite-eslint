/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 0,
    'no-invalid-regexp': 2,
    'no-debugger': 1, // 禁用 debugger
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'vue/multi-word-component-names': 0,
    'prefer-const': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    radix: 0,
    eqeqeq: 0,
    'no-unused-expressions': 0,
    'no-lonely-if': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-unreachable-loop': 0,
    camelcase: 0,
    'no-prototype-builtins': 0,
    'prefer-rest-params': 0,
    'import/no-mutable-exports': 0,
    'no-undef': 0,
    'vue/return-in-computed-property': 0,
    'func-names': 0,
  },
}
