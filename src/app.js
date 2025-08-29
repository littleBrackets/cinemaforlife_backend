const express = require('express');
const moviesRouter = require('./routes/movies');
const app = express();

app.use(express.json());
app.use('/api/movies', moviesRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;