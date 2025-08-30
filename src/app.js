const express = require("express");
const routes = require("./routes/index.js");

const app = express();

app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;