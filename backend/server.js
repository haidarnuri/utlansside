const express = require('express');
const db = require('./db');
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


// GET
app.get('/brukere', async (req, res) => {
  try {
      const result = await db.pool.query("SELECT * FROM brukere");
      console.log("Dette er req :", req)
      console.log("Dette er result :", result)
      res.send(result);
  } catch (err) {
    console.error("Error occurred while querying the database:", err.message);
    res.status(500).json({message: "Error while querying the database", error: err.message});
  }
});

app.post('/brukere', async (req, res) => {
  try {
      console.log(req.body);
      res.status(200).json({message: "Data mottatt"});
  } catch (err) {
    console.error("Error occurred while querying the database:", err.message);
    res.status(500).json({message: "Error while querying the database", error: err.message});
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


