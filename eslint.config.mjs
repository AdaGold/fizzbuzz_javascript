import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["*.config.*"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    files: ['**/*.spec.js', '**/*.test.js'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  {
    rules: {
      "max-len": [1, 120, 2, { "ignoreComments": true }],
      "no-unused-vars": "warn",
      "comma-dangle": ["warn", "only-multiline"],
      "semi": ["warn", "always"],
      "no-console": "off",
      "quotes": [2, "single",
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
      "camelcase": ["error", { "properties": "always" }],
      "dot-notation": "warn",
      "space-before-function-paren": "off",
      "indent": ["warn", 2],
      "padded-blocks": "warn",
      "no-trailing-spaces": "warn",
      "array-bracket-spacing": "warn",
      "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
      "padded-blocks": ["error", "never"],
      "no-var": "error",
    },
  },
];