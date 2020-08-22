module.exports = {
  extends: [
    'adidas-env/browser',
    'adidas-env/module',
    'adidas-env/node',
    'adidas-babel',
    'adidas-react',
    'adidas-typescript'
  ],
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-invalid-this': 'off',
    'no-inline-comments': 'off',
    'no-console': 'warn',
    'template-curly-spacing': ['error', 'never'],
    'no-warning-comments': 'off',
    'no-undefined': 'off',
    'indent': ['error', 2, {'SwitchCase': 1}],
    "no-empty-function": "off",
    "lines-around-comment": "off",
    "no-magic-numbers": "off",
    "react/no-array-index-key": "off",
    "react/no-did-update-set-state": "off",
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-filename-extension': ['error', {'extensions': ['.js', '.jsx', '.ts', '.tsx']}],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      'files': ['**/*.tsx'],
      'rules': {
        'react/prop-types': 'off'
      }
    }
  ]
};
