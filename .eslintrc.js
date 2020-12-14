module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
    warnOnUnsupportedTypeScriptVersion: false,
    project: "./tsconfig.json",
  },
  plugins: ["eslint-plugin-import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier/@typescript-eslint",
    "prettier",
    "prettier/vue",
  ],
  rules: {
    "prettier/prettier": "off",

    "no-console": "error",
    "no-debugger": "error",

    // good to have
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/await-thenable": "error",
    // consistency
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as" },
    ],
    // allow ts-ignore if it's explained
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-ignore": "allow-with-description" },
    ],

    // import order
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc" },
        groups: [
          ["builtin", "external"],
          "unknown",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        pathGroups: [
          {
            pattern: "@/**/*",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@*/**/*",
            group: "external",
            position: "after",
          },
        ],
      },
    ],
  },
}
