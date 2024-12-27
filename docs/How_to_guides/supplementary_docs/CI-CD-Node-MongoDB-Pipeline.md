# CI/CD Pipeline with MongoDB and Multiple Node.js Versions

This project demonstrates a **CI/CD pipeline** using **GitHub Actions** to run **unit tests** with a **MongoDB service** across multiple **Node.js versions**.

---

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install jest supertest cross-env --save-dev
npm install --save-dev mongodb-memory-server
```

### 2. Configure MongoDB Connection
Set up the environment variable in your `.env.test` file:
```
MONGODB_URI=mongodb://localhost:27017/test
```

---

## 🔧 CI/CD Configuration
The pipeline uses **GitHub Actions** with a **MongoDB service**. Here’s the YAML file:

```yaml
name: Node.js CI Pipeline

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      mongodb:
        image: mongo:latest
        ports:
          - 27017:27017
        options: >-
          --health-cmd "mongosh --eval 'db.runCommand({ping: 1})'"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]

    steps:
    - name: Checkout Repository
      uses: actions/checkout@v4

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'

    - name: Install Dependencies
      run: npm install

    - name: Run Tests with Coverage
      env:
        MONGODB_URI: mongodb://localhost:27017/test
      run: npm test

    - name: Upload Coverage Report
      uses: actions/upload-artifact@v4
      with:
        name: coverage-report-${{ matrix.node-version }}
        path: coverage/lcov-report/
```

---

## 🛠️ How It Works
1. **MongoDB Service** - Sets up a temporary MongoDB instance for tests.
2. **Matrix Testing** - Runs tests across multiple Node.js versions (`16.x`, `18.x`, `20.x`).
3. **Environment Variables** - Connects to the MongoDB service using the `MONGODB_URI` variable.
4. **Test Coverage** - Generates and uploads test coverage reports as artifacts.

---

## 📄 Conclusion
This CI/CD pipeline ensures code reliability by testing against different Node.js versions and an isolated MongoDB instance. It’s extensible to other languages or frameworks with similar strategies.
