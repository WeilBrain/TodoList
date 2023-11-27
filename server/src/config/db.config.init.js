const mysql = require('mysql');
const { DB_HOST, DB_USER, DB_PASS } = require('../utils/secrets');

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS
});

connection.connect((err) => {
    if (err) console.log(error);
});

module.exports = connection;