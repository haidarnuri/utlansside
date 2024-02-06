var mariadb = require('mariadb');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../backend.env') });

/*
console.log('DB Host:', process.env.DB_HOST);
console.log('DB User:', process.env.DB_USER);
console.log('DB Password:', process.env.DB_PASSWORD);
console.log('DB Name:', process.env.DB_NAME);
*/

var pool = mariadb.createPool({
    host: process.env.DB_HOST, 
    port: 3306,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME});

module.exports = Object.freeze({
    pool: pool
});
