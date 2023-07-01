module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'prettier', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'import/order': ['error', {
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc'
      },
      groups: [['builtin', 'external'], 'internal', 'parent', ['sibling', 'index'], 'object'],
      pathGroups: [{
        pattern: '@/**',
        group: 'internal',
        position: 'after'
      }]
    }]
  },
  overrides: [{
    files: ['*.js', '*.cjs'],
    env: {
      node: true
    }
  }]
};