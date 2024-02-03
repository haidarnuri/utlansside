const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // for parsing application/json

app.post('/register', (req, res) => {
  console.log(req.body);
  // Database code here ....
  res.status(200).json({ message: 'User registered successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});