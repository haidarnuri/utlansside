const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const result = await db.pool.query("SELECT * FROM brukere");
    console.log("Dette er result :", result);
    res.send(result);
  } catch (err) {
    console.error("Error occurred while querying the database:", err.message);
    res.status(500).json({
      message: "Error while querying the database",
      error: err.message,
    });
  }
});

router.post("/", (req, res) => {
  try {
    console.log("Dette er din JSON fil", req.body);
    console.log("dette er din bruker: ", req.body.mail);
    console.log("dette er ditt passord: ", req.body.password);
    res.status(200).json({ message: "Data mottatt" });
  } catch (err) {
    console.error("Error occurred while querying the database:", err.message);
    res.status(500).json({
      message: "Error while querying the database",
      error: err.message,
    });
  }
});

module.exports = router;
