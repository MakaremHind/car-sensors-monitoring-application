import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  pluginJs.configs.recommended, // Directly include the recommended configuration
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      globals: {
        ...globals.node,  // Set Node.js globals
        jest: "readonly",  // Add Jest globals
        describe: "readonly", // Add Jest globals
        it: "readonly",      // Add Jest globals
        expect: "readonly",  // Add Jest globals
        beforeAll: "readonly",  // Add Jest hooks
        afterAll: "readonly",   // Add Jest hooks
        beforeEach: "readonly", // Add Jest hooks
        afterEach: "readonly"   // Add Jest hooks
      },
    },
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], // Allow unused args starting with '_'
      quotes: ["error", "double"], // Enforce double quotes
      semi: ["error", "always"], // Enforce semicolons
      "no-console": "off", // Allow console logs (useful for Node.js)
    },
  },
];
