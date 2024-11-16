module.exports = {
  env: { browser: true, es2021: true, node: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:i18next/recommended",
    "plugin:@conarti/feature-sliced/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  ignorePatterns: ["build", ".eslintrc.cjs", ".github/*/**"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "@typescript-eslint/consistent-type-imports": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    // "i18next/no-literal-string": ["error", { markupOnly: true, mode: "jsx-text-only" }],
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
  globals: {
    __IS_DEV__: true,
  },
};
