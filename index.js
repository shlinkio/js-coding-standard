module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['simple-import-sort'],
  rules: {
    // Customize rules or add on top of presets
    'max-len': [
      'error',
      { 'code':  120, 'ignoreComments': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    'simple-import-sort/imports': ['error', {
      'groups': [
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
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-restricted-globals': 'off',
    'default-case': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/lines-between-class-members': 'off'
  },
  overrides: [
    {
      files: ['*.test.*', '*.spec.*'],
      rules: {
        'prefer-promise-reject-errors': 'off',
        'no-param-reassign': 'off',
        'react/no-children-prop': 'off',
        '@typescript-eslint/no-shadow': 'off'
      }
    }
  ]
};
