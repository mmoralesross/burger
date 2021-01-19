const mysql = require ('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Titi1992@',
    database: 'burger_db'
  });

  connection.connect ();
  module.exports = connection;
