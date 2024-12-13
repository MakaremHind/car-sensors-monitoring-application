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

[<-Back to HOME PAGE](../How_to_guides.md)