import { defineConfig } from 'oxlint.js';

export default defineConfig({
  plugins: [
    'eslint',
    'typescript',
    'import',
  ],
  options: {
    typeAware: true,
  },
  rules: {
    'typescript/consistent-type-imports': 'error',
    'eslint/no-restricted-exports': ['error', {
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
    'typescript/ban-types': 'off',
    'typescript/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['*.test.*', '*.spec.*'],
      rules: {
        'eslint/prefer-promise-reject-errors': 'off',
        'eslint/no-param-reassign': 'off',
        'typescript/no-shadow': 'off',
      }
    }
  ],
});
