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
      globals: globals.node, // Set Node.js globals
    },
    rules: {
      "no-unused-vars": "error", // Change from 'warn' to 'error' so ESLint can fix it
      quotes: ["error", "double"], // Enforce double quotes
      semi: ["error", "always"], // Enforce semicolons
      "no-console": "off", // Allow console logs (useful for Node.js)
    },
  },
];
