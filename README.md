# Car Sensors Monitoring App

This Node.js application is designed to monitor car sensor data. It uses **Express.js** for the server, **Mongoose** for MongoDB integration, **dotenv** for environment variable management, and **ESLint** and **Prettier** for code quality and formatting.

## Table of Contents

- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Setup Instructions](#setup-instructions)
- [Linting and Formatting with ESLint and Prettier](#linting-and-formatting-with-eslint-and-prettier)
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

---
## Dependencies

This project relies on the following main dependencies:

- **Express**: For building the web server and handling HTTP requests.
- **Mongoose**: For MongoDB integration and schema management.
- **dotenv**: For loading environment variables from a `.env` file.
- **express-validator**: For validating API request inputs.
- **ESLint** and **Prettier**: For code linting and formatting to maintain consistent code quality.

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
npm start
```

Your server should now be running on `http://localhost:3000`.

---

## Linting and Formatting with ESLint and Prettier

This project uses **ESLint** for linting and **Prettier** for code formatting to maintain code quality and consistency.

### Step 1: Configure ESLint

The `.eslintrc.json` configuration file contains the rules for linting. You can run ESLint with:

```bash
npm run lint
```

### Step 2: Configure Prettier
 
The `.prettierrc` configuration file contains the formatting rules. To automatically format code, use:

```bash
npm run format
```

### Scripts in `package.json`

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

## Packaging with `pkg`

You can package the application as a standalone executable using **`pkg`**. This is useful for distribution or deployment where Node.js doesn’t need to be installed.

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

* `Create Car Sensor Data`: Adds a new car model with specified year, sensor type, and sensor value.
* `Retrieve All Car Sensor Data`: Fetches all stored car sensor data.
* `Retrieve Car Sensor Data by ID`: Fetches car data by its unique ID.
* `Update Car Sensor Data`: Updates the sensor value for an existing car by ID.
* `Delete Car Sensor Data`: Deletes car data from the database by ID.

Each action's response will be displayed on the page in a dedicated response section for easy debugging and API testing.

---
## Build tool-specific configuration files

### Code Formatting with Prettier

This project uses Prettier for code formatting to ensure a consistent style across the codebase. The Prettier configuration is defined in the .prettierrc file as follows:

* singleQuote: false – Double quotes will be used for strings.
* semi: true – Semicolons are added at the end of statements.
* tabWidth: 2 – Code indentation is set to 2 spaces.
* trailingComma: "es5" – Trailing commas are added where valid in ES5 (e.g., arrays, objects).
* bracketSpacing: true – Spaces are added between brackets in object literals.
* arrowParens: "avoid" – Parentheses are omitted for single-argument arrow functions.

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
