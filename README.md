# Car Sensors Monitoring App

This Node.js application is designed to monitor car sensor data. It offers a robust backend using **Express.js** for handling HTTP requests, **Mongoose** for MongoDB integration, and **dotenv** for managing environment variables. The project emphasizes high code quality and maintainability with **ESLint** and **Prettier** for code analysis and formatting, **Husky** and **lint-staged** for pre-commit hooks, and comprehensive unit testing with **Jest** and **Supertest**. Additionally, it includes a logging mechanism with **Winston**, providing detailed insights into application activity and errors.

## Table of Contents

- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Setup Instructions](#setup-instructions)
- [Static Code Analysis with ESLint & Code Formatting with Prettier](#static-code-analysis-with-eslint--code-formatting-with-prettier)
- [Automating Static Code Analysis with Pre-commit Hooks](#automating-static-code-analysis-with-pre-commit-hooks)
- [Unit Testing with Jest](#unit-testing-with-jest)
- [Logger Setup with Winston](#logger-setup-with-winston)
- [Packaging with `pkg`](#packaging-with-pkg)
- [Running the Packaged Executable](#running-the-packaged-executable)
- [Environment Variables](#environment-variables)
- [HTML API Tester](#html-api-tester)
- [Build tool-specific configuration files](#build-tool-specific-configuration-files)
- [Versioning](#versioning)
- [Summary](#summary)

---

## Requirements

- [Node.js](https://nodejs.org/) (for development)
- [MongoDB](https://www.mongodb.com/try/download/community) (for database management)
- [pkg](https://www.npmjs.com/package/pkg) (for creating standalone executables)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) (for linting and code formatting)
- [Husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/okonet/lint-staged) (for automating static code analysis with pre-commit hooks)
- [Jest](https://jestjs.io/) and [Supertest](https://github.com/ladjs/supertest) (for unit testing and HTTP request testing)
- [Winston](https://github.com/winstonjs/winston) (for logging application activity and errors)


---

## Dependencies

This project relies on the following main dependencies:

- **Express**: For building the web server and handling HTTP requests.
- **Mongoose**: For MongoDB integration and schema management.
- **dotenv**: For loading environment variables from a `.env` file.
- **express-validator**: For validating API request inputs.
- **ESLint** and **Prettier**: For code linting and formatting to maintain consistent code quality.
- **Winston**: For logging.
- **Jest**: For unit testing.
- **Supertest**: For HTTP assertions and testing routes.

you will have to install these dependencies.

---

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local environment:

```bash
git clone https://github.com/MakaremHind/car-sensors-monitoring-app
```

### Step 2: Install Dependencies

Install all required dependencies:

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory with the following content:

```plaintext
PORT=3000
MONGODB_URI=mongodb://localhost:27017/carsensors
```

### Step 4: Run the Server Locally

To start the server in development mode, use (on your Command Prompt terminal):

```cmd
npm run dev
```

Your server should now be running on `http://localhost:3000`.

---
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

---

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
---
## Unit Testing with Jest
This project includes unit tests using Jest and Supertest to ensure the correctness of the application logic. The tests focus on CRUD operations for car data and validation.

### Running Tests
To run the unit tests for the application, use:

```bash
npm run test
```

The tests are located in the __tests__/ folder and include coverage for creating, reading, updating, and deleting car data.

---
## Logger Setup with Winston
This application uses **Winston** for logging purposes, which helps in tracking application activities, errors, and other logs at different levels (`info`, `warn`, `error`).

### Key Features of the Logger
- **info**: Logs general operational information (e.g., car creation, fetching data).
- **warn**: Logs warnings for situations like missing data or incorrect inputs.
- **error**: Logs errors such as failed database operations.

### Example Logs
```bash
info: Car created: Tesla Model 3 (2022)
warn: Car with ID 607f1f77bcf86cd799439011 not found
error: Error fetching car by ID: [Error details]
```
The logger configuration is located in the file: `config/logger.js`.

---
## Packaging with `pkg`

You can package the application as a standalone executable using **`pkg`**. This is useful for distribution or deployment where `Node.js` doesn’t need to be installed.

### Step 1: Install `pkg`

Install `pkg` globally if you haven't already:

```bash
npm install -g pkg
```

> Download `pkg` from [npm](https://www.npmjs.com/package/pkg).

### Step 2: Build the Executable

To create the standalone executable:

```bash
pkg .
```

This will generate executables for each target platform in the `dist` directory.

---

## Running the Packaged Executable

1. **Place `.env` File**: Make sure the `.env` file is in the same directory as the executable (e.g., in `dist`) to provide the necessary environment variables.

   ```plaintext
   dist/
   ├── car-sensors-monitoring-app.exe   # Your packaged executable
   └── .env                             # Your environment file
   ```

2. **Run the Executable**:

   - **Windows**:

     ```powershell
     .\dist\car-sensors-monitoring-app.exe
     ```

   - **Linux/macOS**:
     ```bash
     ./dist/car-sensors-monitoring-app
     ```

The application will start, reading configuration from the `.env` file.

---

## Environment Variables

The `.env` file should contain the following variables:

- **`PORT`**: Port number for the server to listen on.
- **`MONGODB_URI`**: MongoDB connection URI.

Example `.env` file:

```plaintext
PORT=3000
MONGODB_URI=mongodb://localhost:27017/carsensors
```

---

## HTML API Tester

You can test the API endpoints using the included HTML file, accessible at `http://localhost:3000/tester`. The HTML tester provides forms for interacting with the following API functions:

- `Create Car Sensor Data`: Adds a new car model with specified year, sensor type, and sensor value.
- `Retrieve All Car Sensor Data`: Fetches all stored car sensor data.
- `Retrieve Car Sensor Data by ID`: Fetches car data by its unique ID.
- `Update Car Sensor Data`: Updates the sensor value for an existing car by ID.
- `Delete Car Sensor Data`: Deletes car data from the database by ID.

Each action's response will be displayed on the page in a dedicated response section for easy debugging and API testing.

---

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

## Versioning

This project uses `Semantic Versioning`. Use the following commands to manage versions:

Patch (e.g., 1.0.1 -> 1.0.2):

```bash
npm version patch
```

Minor (e.g., 1.0.0 -> 1.1.0):

```bash
npm version minor
```

Major (e.g., 1.0.0 -> 2.0.0):

```bash
npm version major
```

After updating, push changes with:

```bash
git push origin main --tags
```

---

## Summary

1. **Run the Server**: `npm start` (for local development).
2. **Lint and Format Code**: `npm run lint` and `npm run format`.
3. **Package with `pkg`**: `pkg .` (to create standalone executables).
4. **Place `.env` File**: Ensure `.env` is in the same directory as the executable.
5. **Run the Executable**: Execute the app using the command appropriate for your OS.

This setup ensures a streamlined process for both development and deployment of the Car Sensors Monitoring App.
