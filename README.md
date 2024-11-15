# Car Sensors Monitoring App

This Node.js application is designed to monitor car sensor data. It uses **Express.js** for the server, **Mongoose** for MongoDB integration, **dotenv** for environment variable management, and **ESLint** and **Prettier** for code quality and formatting.

## Table of Contents

- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [Linting and Formatting with ESLint and Prettier](#linting-and-formatting-with-eslint-and-prettier)
- [Packaging with `pkg`](#packaging-with-pkg)
- [Running the Packaged Executable](#running-the-packaged-executable)
- [Environment Variables](#environment-variables)
- [Summary](#summary)

---

## Requirements

- [Node.js](https://nodejs.org/) (for development)
- [MongoDB](https://www.mongodb.com/try/download/community) (for database management)
- [pkg](https://www.npmjs.com/package/pkg) (for creating standalone executables)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) (for linting and code formatting)

---

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local environment:

```bash
git clone https://github.com/MakaremHind/car-sensors-monitoring-app
cd car-sensors-monitoring-app
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

To start the server in development mode, use:

```bash
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

## Summary

1. **Run the Server**: `npm start` (for local development).
2. **Lint and Format Code**: `npm run lint` and `npm run format`.
3. **Package with `pkg`**: `pkg .` (to create standalone executables).
4. **Place `.env` File**: Ensure `.env` is in the same directory as the executable.
5. **Run the Executable**: Execute the app using the command appropriate for your OS.

This setup ensures a streamlined process for both development and deployment of the Car Sensors Monitoring App.
