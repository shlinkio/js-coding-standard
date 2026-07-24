import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: [
    'eslint',
    'typescript',
    'import',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',

    'no-restricted-exports': ['error', {
      'restrictDefaultExports': {
        'direct': true,
        'named': true,
        'defaultFrom': true,
        'namedFrom': true,
        'namespaceFrom': true
      }
    }],

    'import/no-duplicates': 'error',

    // Disabled rules from presets
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['*.test.*', '*.spec.*'],
      rules: {
        'prefer-promise-reject-errors': 'off',
        'no-param-reassign': 'off',
        '@typescript-eslint/no-shadow': 'off',
      }
    }
  ],
});
