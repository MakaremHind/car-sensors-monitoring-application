const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const connectDB = require("./config/database");
connectDB();

app.use("/api/cars", require("./routes/carRoutes"));