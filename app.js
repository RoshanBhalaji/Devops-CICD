const express = require('express');
const app = express();

app.use(express.json());

// Hello endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
