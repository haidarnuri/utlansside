const express = require("express");
const router = express.Router();
const db = require("../db");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


router.post("/login", async (req, res) => {
  try {
    const sqlQueryMail = "select * from brukere where epost=?";
    const responsEpostFromDB = await db.pool.query(sqlQueryMail,req.body.epost);
    if (responsEpostFromDB.length > 0) {
      const user = responsEpostFromDB[0];
      const isMatch = await bcrypt.compare(req.body.passord, user.passord);

      if (isMatch) {
        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ message: "Velkommen", token });
      } else {
        res.status(401).json({ message: "Invalid email or password" }); //feil passord
      }
    } else {
      res.status(401).json({ message: "Invalid email or password" }); //brukeren finnes ikke
    }
  } catch (error) {
    console.log("Feilmeldingen er ", error);
    res.status(500).json({ message: "En feil oppsto under databasforespørselen" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const {
      fornavn,
      etternavn,
      epost,
      passord,
      telefonnummer,
      klasse,
      kontaktlarer,
    } = req.body;

    const hashedPassword = await bcrypt.hash(passord,10);
    const sqlQuery =
      "INSERT INTO brukere (fornavn, etternavn, epost, passord, telefonnummer, klasse, kontaktlarer) VALUES (?,?,?,?,?,?,?)";
    
      const result = await db.pool.query(sqlQuery, [
      fornavn,
      etternavn,
      epost,
      hashedPassword,
      telefonnummer,
      klasse,
      kontaktlarer,
    ]);
    res.status(200).json("Data mottatt i DB");
  } catch (err) {
    res.status(500).json({
      message: "Error while querying the database",
      error: err.message,
    });
  }
});

module.exports = router;
