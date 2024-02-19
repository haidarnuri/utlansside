const express = require("express");
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const brukereRouter = require("./routes/brukere");

const app = express();
const port = 4000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // for parsing application/json

app.use("/brukere", brukereRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
