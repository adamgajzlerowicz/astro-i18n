module.exports = {
  root: true,
  env: {
    browser: true,
  },
  globals: {
    React: true,
  },
  ignorePatterns: ['dist'],
  extends: [
    'plugin:astro/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['astro', '@typescript-eslint', 'solid'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-set-html-directive': 'error',
      },
    },
    {
      files: ['*.tsx'],
      settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
      extends: ['plugin:solid/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.jsx'],
      },
      rules: {},
    },
  ],
  rules: {
    'prefer-template': 1,
    'no-useless-concat': 1,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        varsIgnorePattern: '[iI]gnored$',
        args: 'after-used',
        argsIgnorePattern: '[iI]gnored$',
      },
    ],
    curly: ['warn', 'all'],
    'comma-dangle': 0,
    'function-paren-newline': 0,
    semi: 0,
    'no-multi-spaces': ['warn', { ignoreEOLComments: false }],
    'eslint-comments/no-unlimited-disable': 0,
    'linebreak-style': ['error', 'unix'],
    'newline-after-var': ['warn', 'always'],
    'global-require': 'off',
    'no-unreachable': ['warn'],
    'eol-last': ['warn', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-debugger': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 1 }],
    quotes: ['warn', 'single', { avoidEscape: true }],
    'no-console': 0,
    'no-undef': 2,
    'object-shorthand': 'error',
    'prefer-const': 2,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'never', prev: 'import', next: ['import'] },
      { blankLine: 'any', prev: 'const', next: ['const'] },
    ],
  },
}
