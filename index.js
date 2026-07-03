const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Hello endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
