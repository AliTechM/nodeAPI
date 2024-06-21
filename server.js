const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const mockUser = {
  username: 'kminchelle',
  password: '0lelplR',
  token: 'mockToken12345'
};

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  if (username === mockUser.username && password === mockUser.password) {
    res.json({ token: mockUser.token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = app; // Export the app for Vercel
