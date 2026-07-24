import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/react-compiler': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Disabled rules from presets
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
