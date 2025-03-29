import react from 'eslint-plugin-react';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';

const reactConfig = [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  pluginJsxA11y.flatConfigs.recommended,
  reactCompiler.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
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
      'react/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

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
];

export default reactConfig;
