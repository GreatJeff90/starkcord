const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());  // Allow cross-origin requests

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to save user data
app.post('/saveUserData', (req, res) => {
  console.log('Received request body:', req.body);  // Log the request body

  const userData = req.body;
  if (!userData) {
    return res.status(400).json({ error: 'No data received' });
  }

  const filePath = path.join(__dirname, 'users.json');
  let users = [];
  
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    users = JSON.parse(data);
  }

  users.push(userData);

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');

  res.json({ message: 'User data saved successfully!' });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
