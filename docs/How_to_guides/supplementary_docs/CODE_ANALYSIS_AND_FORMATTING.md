## Static Code Analysis with ESLint & Code Formatting with Prettier

This project uses **ESLint** for static code analysis to enforce coding standards and identify issues in the codebase, such as unused variables and potential bugs. Additionally, **Prettier** is used for code formatting to ensure consistent style across the codebase.

---
### 1. Static Code Analysis with ESLint
---

**ESLint** checks your code for issues based on the rules defined in the `.eslintrc.json` or `eslint.config.mjs` file.

### To run static code analysis:

#### Install ESLint (if not already installed):

```bash
npm install eslint --save-dev
```

#### Run ESLint:
Run the following command to check your code for linting issues:

```bash
npm run lint
```

ESLint will check your code for adherence to the rules and provide warnings or errors as needed. For example:

```bash
/path/to/project/server.js
  10:5  warning  Unexpected console statement  no-console
  15:3  error    Missing semicolon             semi

✖ 2 problems (1 error, 1 warning)
```

### Configuration File:
The ESLint configuration for this project can be found in the file `eslint.config.mjs`. This file contains the rules for static analysis.

---

### 2. Code Formatting with Prettier
---
Prettier is used to automatically format your code to maintain consistent code style. You can run Prettier to format your code according to the rules in the `.prettierrc` file.

### Install Prettier (if not already installed):
```bash
npm install prettier --save-dev
```

### Run Prettier:
Run the following command to automatically format your code:

``` bash
npm run format
```
This command will reformat the code according to the Prettier rules, ensuring consistency across the codebase.

---
### 3. Scripts in `package.json`
---

The `package.json` file includes the following scripts to make linting and formatting easier:

```json
"scripts": {
  "start": "node server.js",
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

- **`npm run lint`**: Runs ESLint to check for code issues.
- **`npm run format`**: Runs Prettier to format code according to `.prettierrc` settings.


[<-Back to HOME PAGE](../How_to_guides.md)
