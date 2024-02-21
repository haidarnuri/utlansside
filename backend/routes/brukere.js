const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/:epost", async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM brukere WHERE epost=?";
    const result = await db.pool.query(sqlQuery, req.params.epost);
    res.status(200).json(result);
  } catch (err) {
    console.error("Error occurred while querying the database:", err.message);
    res.status(500).json({
      message: "Error while querying the database",
      error: err.message,
    });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { fornavn, etternavn, epost, telefonnummer, klasse, kontaktlarer } =
      req.body;
    const sqlQuery =
      "INSERT INTO brukere (fornavn, etternavn, epost, telefonnummer, klasse, kontaktlarer) VALUES (?,?,?,?,?,?)";
    const result = await db.pool.query(sqlQuery, [
      fornavn,
      etternavn,
      epost,
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
