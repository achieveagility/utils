import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export const eslintConfig = [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginUnicorn.configs['recommended'],
  {
    languageOptions: {
      globals: globals.builtin,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      curly: ['error', 'all'],
      'object-shorthand': ['error', 'always'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      'unicorn/no-null': 'off',
      'unicorn/no-array-reduce': 'warn',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            prop: false,
            props: false,
            ref: false,
            refs: false,
          },
          ignore: ['generateStaticParams'],
        },
      ],
    },
  },
];
