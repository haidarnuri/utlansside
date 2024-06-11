const express = require("express");
const router = express.Router();
const db = require("../db");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


router.post("/login", async (req, res) => {
  try {
    const sqlQueryMail = "select * from brukere where epost=? and passord=?;";
    const responsEpostFromDB = await db.pool.query(sqlQueryMail,[req.body.epost,req.body.passord]);
    if (responsEpostFromDB.length > 0) {
      res.status(200).json("Velkommen");
    } else {
      res.status(200).json("Ikke velkommen");
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
    console.error("Error occurred while querying the database:", err.message);
    res.status(500).json({
      message: "Error while querying the database",
      error: err.message,
    });
  }
});

module.exports = router;
