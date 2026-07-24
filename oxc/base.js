import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: [
    'eslint',
    'typescript',
    'import',
  ],
  jsPlugins: [
    'eslint-plugin-simple-import-sort',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',

    'simple-import-sort/imports': ['error', {
      'groups': [
        // First external imports, then local imports, then styles imports
        ['^', '^\\.', '\\.s?css$']
      ]
    }],
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
