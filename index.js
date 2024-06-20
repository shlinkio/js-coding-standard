import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

export const baseConfig = tseslint.config(
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@stylistic/arrow-parens': 'error',
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/block-spacing': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/eol-last': 'error',
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/indent': ['error', 2],
      '@stylistic/key-spacing': 'error',
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/max-len': [
        'error',
        // Do not allow more than 120 characters per line, except for long strings and comments in the same line
        { 'code':  120, 'ignoreComments': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true },
      ],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/rest-spread-spacing': 'error',
      '@stylistic/semi': 'error',
      '@stylistic/spaced-comment': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1 }],

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

      // Disabled rules from presets
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['*.test.*', '*.spec.*'],
    rules: {
      'prefer-promise-reject-errors': 'off',
      'no-param-reassign': 'off',
      '@typescript-eslint/no-shadow': 'off',
    },
  },
);

export const reactConfig = tseslint.config(
  {
    plugins: {
      'jsx-a11y': pluginJsxA11y,
      react,
      'react-hooks': eslintPluginReactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,

      // Disabled rules from presets
      'react/display-name': ['off', { 'ignoreTranspilerName': false }],
      'react/prop-types': 'off',
    },
  },
  {
    files: ['*.test.*', '*.spec.*'],
    rules: {
      'react/no-children-prop': 'off',
    },
  },
);

export default tseslint.config(
  ...baseConfig,
  ...reactConfig,
);
