/* eslint-disable no-console */
const dbConnector = require('../config/mysqlConnect');

dbConnector.connectToDB.connect((err) => {
  if (err) throw err;
  console.log('Database connection successful');
});

const getUserBalance = (params) => new Promise((resolve, reject) => {
  const { address } = params;
  const query = 'SELECT * from users WHERE address = ?';
  dbConnector.connectToDB.query(query, [address], (err, rows) => {
    if (!err) {
      resolve({ data: rows });
    }
    reject(err);
  });
});

module.exports = {
  getUserBalance,
};
