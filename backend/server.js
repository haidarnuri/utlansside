const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/brukere'); 

app.use(express.json()); // Middleware for å parse JSON-kropper

// Konfigurer CORS for å tillate cookies/credentials
app.use(cors({
  origin: 'http://localhost:3000', // Tillat frontend-opprinnelsen
  credentials: true // Tillat sending av cookies
}));

// Bruk bruker-ruter
app.use('/brukere', userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
