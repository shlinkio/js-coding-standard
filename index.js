module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['jsx-a11y', 'simple-import-sort', '@stylistic'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Customize rules or add on top of presets
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
      { 'code':  120, 'ignoreComments': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true },
    ],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/rest-spread-spacing': 'error',
    '@stylistic/semi': 'error',
    '@stylistic/spaced-comment': 'error',
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
    'react/display-name': ['off', { 'ignoreTranspilerName': false }],
    'react/prop-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
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
