const express = require("express");
const routes = require("./routes/index.js");
const cors = require("cors");

const requestId = require("./middlewares/requestId");
const requestLogger = require("./middlewares/requestLogger");
const errorHandler = require("./middlewares/errorHandler");

const config = require("./config/config.js");


const app = express();

app.use(cors({
  origin: config.CLIENT_URL, // if CRA
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(requestId);
app.use(requestLogger);

app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.use(errorHandler);

module.exports = app;