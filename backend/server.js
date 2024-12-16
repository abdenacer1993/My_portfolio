const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder to serve images
app.use("/captureSites", express.static("captureSites"));

// Routes
const blogs = require("./routes/blogs");
const works = require("./routes/works");

app.use("/api/blogs", (req, res) => res.json(blogs));
app.use("/api/works", works);
app.use("/contact", require("./routes/emailRoutes"));

// Start the server with dynamic port assignment
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
