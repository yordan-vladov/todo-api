const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./routes/task.route");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/tasks", taskRoute);

app.get("/", (_, res) => {
    res.send("Hello, World");
});

const port = 3000;

mongoose.connect(
    "mongodb://localhost:27017/task-api"
).then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
