const express = require("express");
const router = express.Router();
const db = require("../db");
//const bcrypt = require("bcryptjs");

/*
router.get("/:epost", async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM brukere WHERE epost=?";
    const result = await db.pool.query(sqlQuery, req.params.epost);
    console.log(result[0].passord);
    console.log(result[0].epost);

    res.status(200).json(result);
  } catch (err) {
    console.error("Error occurred while querying the database:", err.message);
    res.status(500).json({
      message: "Error while querying the database",
      error: err.message,
    });
  }
});
*/
router.post("/login", async (req, res) => {
  try {
    
    const sqlQueryMail = "select * from brukere where epost=?;";
    const responsEpostFromDB = await db.pool.query(sqlQueryMail,req.body.epost);
    

    if (responsEpostFromDB.length > 0) {
      res.status(200).json("Brukeren din finneDEs!");
    } else {
      res.status(200).json("Brukeren din finnes ikke!");
    }
  } catch (error) {
    console.log("Feilmeldingen er ", error);
    res.status(500).json({ message: "En feil oppsto under databasforespørselen" });
  }
  
  /*try {
    console.log("denne mailen kom fra frontend: ", req.body.epost);
   
    const sqlQueryMail = "SELECT * FROM brukere WHERE epost=?";
    const resultMail = await db.pool.query(sqlQueryMail, req.body.epost);

    console.log("dette passordet kom fra frontend: ", req.body.passord);
    const sqlQueryPassword = "SELECT * FROM brukere WHERE passord=?";
    const resultPassord = await db.pool.query(
      sqlQueryPassword,
      req.body.passord
    );

    console.log("denne mailen kom fra db: ", resultMail[0].epost);
    console.log("dette passordet kom fra db: ", resultPassord[0].passord);
  } catch (err) {
    console.error("Error occurred while querying the database:", err.message);
    res.status(500).json({
      message: "Error while querying the database",
      error: err.message,
    });
  }*/
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

    const sqlQuery =
      "INSERT INTO brukere (fornavn, etternavn, epost, passord, telefonnummer, klasse, kontaktlarer) VALUES (?,?,?,?,?,?,?)";
    const result = await db.pool.query(sqlQuery, [
      fornavn,
      etternavn,
      epost,
      passord,
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
