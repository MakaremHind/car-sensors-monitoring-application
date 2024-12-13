
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

[<-Back to HOME PAGE](../How_to_guides.md)