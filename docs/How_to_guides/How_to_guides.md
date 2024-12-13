@use Car Sensors Monitoring App

Index
---

### Getting started

- [Quick Start](supplementary_docs/Quick_Start.md)  
  **A quick guide** to get started with the Car Sensors Monitoring App, including essential steps to set up and run the application.

- [Requirements](supplementary_docs/Requirements.md)  
  **Understand the requirements** for running the project, including Node.js, MongoDB, and other tools needed.

- [Dependencies](supplementary_docs/Dependencies.md)  
  **Overview of dependencies** used in the project like Express, Mongoose, Winston, and more, with their purposes.

### Configuration and Setup

- [Setup Instructions](supplementary_docs/Setup_instructions.md) 
  **Step-by-step instructions** to set up the app locally, including cloning, installing dependencies, and running the server.

- [Environment Variables](supplementary_docs/Environment_variables.md)  
  **Details about required environment variables** like `PORT` and `MONGODB_URI` to ensure the application runs smoothly.

- [Build tool-specific configuration files](supplementary_docs/BUILD_CONFIGURATION.md)  
  **Information on build tools** used in the project, along with configuration details for tools like ESLint and Prettier.

### Code Quality and Testing

- [Static Code Analysis with ESLint & Code Formatting with Prettier](supplementary_docs/CODE_ANALYSIS_AND_FORMATTING.md)  
  **Enforcing code quality** using ESLint for linting and Prettier for formatting to ensure a consistent codebase.

- [Automating Static Code Analysis with Pre-commit Hooks](supplementary_docs/PRE_COMMIT_HOOKS.md)  
  **Automating code checks** during commits with Husky and lint-staged to catch issues early.

- [Unit Testing with Jest](supplementary_docs/UNIT_TESTING.md)  
  **Guidelines for writing and running tests** with Jest to validate the functionality of your app.

### Features and Utilities

- [Logger Setup with Winston](supplementary_docs/LOGGER_SETUP.md)  
  **Instructions on logging** application events and errors using the Winston library for better debugging and monitoring.

- [Packaging with `pkg` and Running the Packaged Executable](supplementary_docs/packaging-with-pkg.md)  
  **How to package your application** into a standalone executable for easier distribution.

- [HTML API Tester](supplementary_docs/HTML_ARI_TESTER.md)  
  **Guide to using the API tester HTML file** to interact with the app’s API endpoints for debugging or testing.

### Additional Resources

- [Versioning](supplementary_docs/VERSIONING_GUIDE.md)  
  **Details on the versioning strategy** used for managing updates and changes to the project.

- [Summary](#summary)  
  **A concise summary** of how to set up and use the app, including final remarks and best practices.


## Summary

1. **Run the Server**: `npm start` (for local development).
2. **Lint and Format Code**: `npm run lint` and `npm run format`.
3. **Package with `pkg`**: `pkg .` (to create standalone executables).
4. **Place `.env` File**: Ensure `.env` is in the same directory as the executable.
5. **Run the Executable**: Execute the app using the command appropriate for your OS.

These guides ensures a streamlined process for both development and deployment of the Car Sensors Monitoring App.