# Car Sensors Monitoring App

This Node.js application is designed to monitor car sensor data. It offers a robust backend using **Express.js** for handling HTTP requests, **Mongoose** for MongoDB integration, and **dotenv** for managing environment variables. The project emphasizes high code quality and maintainability with **ESLint** and **Prettier** for code analysis and formatting, **Husky** and **lint-staged** for pre-commit hooks, and comprehensive unit testing with **Jest** and **Supertest**. Additionally, it includes a logging mechanism with **Winston**, providing detailed insights into application activity and errors.


## Table of Contents 

1. [Introduction](#introduction)
2. [Features](#features)
3. [Setup Instructions](#setup-instructions)
4. [How to Use](#how-to-use)
5. [How to Contribute](#contributing-to-the-project)
6. [License](#license)
7. [Contact](#contact)


## Additional Documentation
- [Static Code Analysis with ESLint & Code Formatting with Prettier](docs/How_to_guides/supplementary_docs/CODE_ANALYSIS_AND_FORMATTING.md)
- [Automating Static Code Analysis with Pre-commit Hooks](docs/How_to_guides/supplementary_docs/PRE_COMMIT_HOOKS.md)
- [Unit Testing with Jest](docs/How_to_guides/supplementary_docs/UNIT_TESTING.md)
- [Logger Setup with Winston](docs/How_to_guides/supplementary_docs/LOGGER_SETUP.md)
- [Build tool-specific configuration files](docs/How_to_guides/supplementary_docs/BUILD_CONFIGURATION.md)
- [Generate a Documentation](docs/How_to_guides/supplementary_docs/JSDOC_GUIDE.md)
- [Versioning](docs/How_to_guides/supplementary_docs/VERSIONING_GUIDE.md)

---
## Requirements

- [Node.js](https://nodejs.org/) (for development)
- [MongoDB](https://www.mongodb.com/try/download/community) (for database management)
- [pkg](https://www.npmjs.com/package/pkg) (for creating standalone executables)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) (for linting and code formatting)
- [Husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/okonet/lint-staged) (for automating static code analysis with pre-commit hooks)
- [Jest](https://jestjs.io/) and [Supertest](https://github.com/ladjs/supertest) (for unit testing and HTTP request testing)
- [Winston](https://github.com/winstonjs/winston) (for logging application activity and errors)
- [jsdoc](for generating a documentation)


---
## Features

This project relies on the following main dependencies:

- **Express**: For building the web server and handling HTTP requests.
- **Mongoose**: For MongoDB integration and schema management.
- **dotenv**: For loading environment variables from a `.env` file.
- **express-validator**: For validating API request inputs.
- **ESLint** and **Prettier**: For code linting and formatting to maintain consistent code quality.
- **Winston**: For logging.
- **Jest**: For unit testing.
- **Supertest**: For HTTP assertions and testing routes.
- **jsdoc**: For generate a documentation for project codes.

you will have to install these dependencies.

---
## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local environment:

```bash
git clone https://github.com/MakaremHind/car-sensors-monitoring-app
```
---
### Step 2: Install Dependencies

Install all required dependencies:

```bash
npm install
```
---
### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory with the following content:

```plaintext
PORT=3000
MONGODB_URI=mongodb://localhost:27017/carsensors
```
---
### Step 4: Run the Server Locally

To start the server in development mode, use (on your Command Prompt terminal):

```cmd
npm run dev
```

Your server should now be running on `http://localhost:3000`.

---
### Step 5: Packaging with `pkg`
You can package the application as a standalone executable using **`pkg`**. This is useful for distribution or deployment where `Node.js` doesn’t need to be installed.


   ### 5.1 Install `pkg`

   Install `pkg` globally if you haven't already:

   ```bash
   npm install -g pkg
   ```

 >Download `pkg` from [npm](https://www.npmjs.com/package/pkg).

   ### 5.2 Build the Executable

   To create the standalone executable:

   ```bash
   pkg .
   ```

This will generate executables for each target platform in the `dist` directory.

---
### Step 6: Running the Packaged Executable

   ### 6.1 **Place `.env` File**: Make sure the `.env` file is in the same directory as the executable (e.g., in `dist`) to provide the necessary environment variables.

   ```plaintext
   dist/
   ├── car-sensors-monitoring-app.exe   # Your packaged executable
   └── .env                             # Your environment file
   ```

   ### 6.2 **Run the Executable**:

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
### step 7: Environment Variables

The `.env` file should contain the following variables:

- **`PORT`**: Port number for the server to listen on.
- **`MONGODB_URI`**: MongoDB connection URI.

Example `.env` file:

```plaintext
PORT=3000
MONGODB_URI=mongodb://localhost:27017/carsensors
```


## How to Use

You can test the API endpoints using the included HTML file, accessible at `http://localhost:3000/tester`. The HTML tester provides forms for interacting with the following API functions:

- `Create Car Sensor Data`: Adds a new car model with specified year, sensor type, and sensor value.
- `Retrieve All Car Sensor Data`: Fetches all stored car sensor data.
- `Retrieve Car Sensor Data by ID`: Fetches car data by its unique ID.
- `Update Car Sensor Data`: Updates the sensor value for an existing car by ID.
- `Delete Car Sensor Data`: Deletes car data from the database by ID.

Each action's response will be displayed on the page in a dedicated response section for easy debugging and API testing.


## Contributing to the Project

We welcome contributions from developers and non-developers alike! See the [CONTRIBUTING.md](/CONTRIBUTING.md) file for details on how to get started.

### Key Points:

- Follow our coding standards enforced by **ESLint** and **Prettier**.
- Run all tests before submitting a pull request.
- Check our [Code of Conduct](docs/CODE_OF_CONDUCT.md).


## License
This project is licensed under the **MIT License**. See the [LICENSE.md](/LICENSE.txt) file for full details.


## Contact
For questions or feedback, reach out to the project team:

- **Email**: hind.makarem@example.com
- **GitHub**: [Hind Makarem](https://github.com/MakaremHind/)