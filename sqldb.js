const mysql = require('mysql');
const secret = require('./env/cred.js');

var pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: secret,
    database: 'sqlSeed'
});

pool.connect(function (err) {
    if (err) throw err;
    console.log("Ready to do your bidding, Miss Kytra.")
});

//alter user 'root'@'localhost' identified with mysql_native_password by 'SECRET'