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
    'max-len': ['error', {
      code: 120,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreComments: true
    }],
    'comma-dangle': 'off',
    'no-invalid-this': 'off',
    'no-inline-comments': 'off',
    'no-console': 'warn',
    'template-curly-spacing': ['error', 'never'],
    'no-warning-comments': 'off',
    'no-undefined': 'off',
    'object-shorthand': 'off',
    'no-mixed-operators': 'off',
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
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
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
