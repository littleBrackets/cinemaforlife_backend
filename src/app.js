const express = require("express");
const routes = require("./routes/index.js");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:3000", // if CRA
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;