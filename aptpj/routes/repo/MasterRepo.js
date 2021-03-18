var con = require('../dbconnection/db')
var getCountryListQuery = function getCountryListQuery() {
  return new Promise((resolve, reject) => {
    con.con.query("SELECT * FROM country_master", function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}
var getStateListQuery = function getStateListQuery(country_id) {
  return new Promise((resolve, reject) => {
    con.con.query("SELECT * FROM state_master where country_id=" + country_id, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

module.exports = {
  getCountryListQuery: getCountryListQuery,
  getStateListQuery: getStateListQuery


}
