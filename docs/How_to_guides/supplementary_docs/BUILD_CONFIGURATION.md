## Build tool-specific configuration files

### Code Formatting with Prettier

This project uses Prettier for code formatting to ensure a consistent style across the codebase. The Prettier configuration is defined in the .prettierrc file as follows:

- singleQuote: false – Double quotes will be used for strings.
- semi: true – Semicolons are added at the end of statements.
- tabWidth: 2 – Code indentation is set to 2 spaces.
- trailingComma: "es5" – Trailing commas are added where valid in ES5 (e.g., arrays, objects).
- bracketSpacing: true – Spaces are added between brackets in object literals.
- arrowParens: "avoid" – Parentheses are omitted for single-argument arrow functions.

### Code Linting with ESLint

The project uses `ESLint` to maintain code quality. The configuration, defined in `eslint.config.mjs`, is tailored for `Node.js` and includes both recommended and custom rules.

Key Configuration Details

- `Base Config`: Starts with recommended ESLint settings from `@eslint/js`.
- `Files`: Targets all `.js` files.
- `Language Options`: (sourceType: "module" for ES modules, ecmaVersion: "latest" for modern JavaScript, globals: Includes Node.js globals (`e.g.`, require, process)).
- `Rules`: Warns on unused variables, Enforces double quotes and semicolons, Allows console statements.

---

[<-Back to HOME PAGE](../How_to_guides.md)