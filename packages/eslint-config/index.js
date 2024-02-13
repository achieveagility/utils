// TODO: switch to flat config, see https://eslint.org/docs/latest/use/configure/configuration-files-new
const config = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:security/recommended-legacy",
    "plugin:unicorn/recommended",
  ],
  plugins: ["@typescript-eslint", "check-file"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: {},
      },
    },
  },
  rules: {
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{js,ts}": "KEBAB_CASE",
      },
      {
        ignoreMiddleExtensions: true,
      },
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "KEBAB_CASE",
      },
    ],
    "unicorn/prevent-abbreviations": "off",
  },
};

module.exports = config;
