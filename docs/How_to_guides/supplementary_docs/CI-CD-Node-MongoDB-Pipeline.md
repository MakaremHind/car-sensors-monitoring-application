# CI/CD Pipeline with MongoDB, SonarCloud, Gitleaks, ESLint, Prettier, and Automated Releases  

This project demonstrates a **CI/CD pipeline** using **GitHub Actions** to run **unit tests**, **code quality checks**, **secret scanning**, **vulnerability scans**, and **automated releases** with a **MongoDB service** across multiple **Node.js versions**.  

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

The pipeline uses **GitHub Actions** with a **MongoDB service** and integrates additional tools like **SonarCloud**, **Gitleaks**, **ESLint**, **Prettier**, and **Automated Releases**.  

### Key Features of the Workflow:  

1. **Branch and Tag Triggers** - Supports triggers for commits to the main branch, pull requests, and tag creation.  
2. **Matrix Testing** - Tests on Node.js versions 16.x, 18.x, and 20.x.  
3. **Secret Scanning** - Uses **Gitleaks** to scan the codebase for secrets.  
4. **Code Quality Analysis** - Uses **SonarCloud** for code smells, vulnerabilities, and test coverage reports.  
5. **Linting and Formatting** - Uses **ESLint** for style checks and **Prettier** for formatting validation.  
6. **Vulnerability Scanning** - Uses `npm audit` to check for dependency vulnerabilities.  
7. **Automated Releases** - Generates a **changelog**, uploads **artifacts**, and publishes a **GitHub Release** upon pushing a new tag.  

---

### 📝 YAML File Overview  

#### Commit Events (Push/PR):  

- **Runs Tests**: Executes tests with MongoDB service for Node.js versions 16.x, 18.x, and 20.x.  
- **Analysis Tools**:  
  - **SonarCloud**: Code quality analysis and test coverage.  
  - **Gitleaks**: Detects secrets in the codebase.  
  - **ESLint and Prettier**: Validates code style and formatting.  
  - **npm audit**: Checks dependencies for vulnerabilities.  

#### Tag Events (Release):  

- **Runs Tests Before Release**: Ensures tests pass before proceeding.  
- **Changelog Generation**: Automatically generates a changelog from Git history since the last tag.  
- **Uploads Artifacts**: Stores test coverage reports as artifacts.  
- **Release Creation**: Publishes a release with the changelog and coverage artifacts.  

---

### YAML Configuration Example  

See the YAML configuration [here](./.github/workflows/node.js.yml) for full details.  

---

## 🛠️ Features  

1. **MongoDB Service** - Sets up a temporary MongoDB instance for testing.  
2. **Matrix Testing** - Tests against multiple Node.js versions (`16.x`, `18.x`, `20.x`).  
3. **Secret Detection** - Uses **Gitleaks** to detect secrets in the codebase.  
4. **Code Analysis** - Uses **SonarCloud** for code quality analysis and reporting.  
5. **Linting and Formatting** - Uses **ESLint** for code style checks and **Prettier** for formatting validation.  
6. **Vulnerability Scanning** - Uses `npm audit` for dependency vulnerability checks.  
7. **Automated Releases** -  
   - Generates a **changelog** from Git history.  
   - Publishes the release with coverage reports and artifacts.  
   - Allows updates to existing releases with improved handling.  

---

## 📄 Conclusion  

This CI/CD pipeline integrates modern tools to enforce **code quality**, **security**, **formatting standards**, and **automated releases** while ensuring compatibility across **Node.js versions**. It is designed for scalability and extensibility for future enhancements.  

