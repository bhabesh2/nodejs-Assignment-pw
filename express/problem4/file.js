const express = require('express');
const app = express();
const PORT = 3000;

// Route to generate a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
  res.json({ random: randomNumber });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
