## Automating Static Code Analysis with Pre-commit Hooks

This project uses **Husky** and **lint-staged** to automatically run **ESLint** on staged `.js` files before committing, ensuring code quality by fixing issues like unused variables and formatting errors.

## 1. Install and Set Up Husky

**Husky** is used to manage Git hooks and trigger **lint-staged** before each commit.

### Steps:
1. Install **Husky**:

   ```bash
   npm install husky --save-dev
   ```
2. Enable Git hooks:

   ```bash
   npx husky install
   ```
3. husky init (recommended)
The init command simplifies setting up husky in a project. It creates a `pre-commit` script in `.husky/` and updates the prepare script in `package.json`. Modifications can be made later to suit your workflow.

   ```bash
   npx husky init
   ```

4. Add this code to pre-commit hook to run lint-staged:

   ```bash
   npx lint-staged
   ```

### Link to Husky Configuration:
View the pre-commit hook in `.husky/pre-commit`.

## 2. Set Up Lint-staged
Lint-staged runs ESLint on only staged files, improving performance.

Steps:
1. Install Husky and lint-staged:

   ```bash
   npm install lint-staged --save-dev
   ```
2. Add this configuration to package.json:
   ```json
   "lint-staged": {
    "*.js": "eslint --fix"
   }
   ```
3. Link to lint-staged Configuration:
View the lint-staged config in `package.json`.

## 3. How It Works
- Husky triggers the pre-commit hook.
- Lint-staged runs ESLint on staged files and fixes issues (like formatting and unused variables).
- If there are unfixable issues, the commit is blocked and displayed in the terminal.

## 4. Testing the Setup
Modify a .js file (e.g., add an unused variable).

### **Stage* the file:
```bash
git add .
``` 
*Note: Sometimes, even after adding a file to Git, it may not be staged. Make sure to stage the file before committing.*
### Commit the changes:
```bash
git commit -m "Test commit with ESLint pre-commit hook"
```
ESLint will fix any issues before the commit is finalized.

## 5. Force Push (If Necessary)
If you've pushed commits and need to rewrite history (e.g., after amending commit messages), use:
```bash
git push --force
```

[<-Back to HOME PAGE](../How_to_guides.md)