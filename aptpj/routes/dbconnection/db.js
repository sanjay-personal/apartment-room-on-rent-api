var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "frndsprjct",
    password: "vijaya1234",
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