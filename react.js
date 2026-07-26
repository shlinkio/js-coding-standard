import { defineConfig } from 'oxlint.js';

export default defineConfig({
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/react-compiler': 'error',
    'react/rules-of-hooks': 'error',
    'react/exhaustive-deps': 'error',

    // Disabled rules from presets
    'jsx-a11y/prefer-tag-over-role': 'off',
    'react/display-name': ['off', { 'ignoreTranspilerName': false }],
  },
  overrides: [
    {
      files: ['*.test.*', '*.spec.*'],
      rules: {
        'react/no-children-prop': 'off',
      },
    }
  ]
});
