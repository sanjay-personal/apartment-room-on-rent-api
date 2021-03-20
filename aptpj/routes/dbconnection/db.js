var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9703606364@p",
    database: "apartments"
});

con.connect(function (err) {
    if (err) {
        console.log("Not Connected")
        throw err;
    } else {
        console.log("Connected apartments");
    }
});

module.exports = { con };