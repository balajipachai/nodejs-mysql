const mysql = require('mysql');
const database = require('.');

const connectToDB = mysql.createConnection(database.mysql);

module.exports = {
  connectToDB,
};
