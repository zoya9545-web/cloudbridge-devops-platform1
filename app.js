const express = require("express");
const app = express();

app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    message: "Application is healthy"
  });
});

// Sample users endpoint
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  res.json(users);
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to CloudBridge DevOps Platform - Version 2");
});

const PORT = process.env.PORT || 3000;

// Listen on all interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
