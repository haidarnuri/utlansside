var mariadb = require("mariadb");
const path = require("path");
const cors = require('cors');

require("dotenv").config({ path: path.resolve(__dirname, "../backend.env") });

var pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = Object.freeze({
  pool: pool,
});
