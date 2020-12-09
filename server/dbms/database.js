let mysql = require('mysql');

let db = mysql.createConnection({
    host : 'localhost',
    database : 'db_pharma',
    user : 'root',
    password : ''
});

db.connect();
module.exports = db;