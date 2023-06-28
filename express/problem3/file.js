const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
