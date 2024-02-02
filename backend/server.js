import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

const app = express();
const port = 4000;


const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));


app.use(json()); // for parsing application/json


app.post('/register', (req, res) => {
  console.log(req.body);
  // database code here ....
  res.status(200).json({ message: 'User registered successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
