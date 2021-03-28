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
    // console.log("counry",country_id)
    con.con.query("SELECT * FROM state_master where country_id=" + country_id, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var getDistrictListQuery = function getDistrictListQuery(country_id,state_id) {
  return new Promise((resolve, reject) => {
    con.con.query("SELECT * FROM district_master where country_id=" +  country_id + " and " +"state_id=" + state_id, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var getareaListQuery = function getareaListQuery(country_id,state_id,district_id) {
  return new Promise((resolve, reject) => {
    con.con.query("SELECT * FROM area_master where country_id=" +  country_id + " and " +"state_id=" + state_id + " and " +"district_id=" + district_id, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var saveCountryListQuery = function saveCountryListQuery(coutryValues) {
  return new Promise((resolve, reject) => {
    con.con.query("insert into country_master(country_name,created_by,creation_date,updated_by,updation_date) values(?,?,?,?,?)",coutryValues, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var getCountryNameQuery = function getCountryNameQuery(countryName) {
  return new Promise((resolve, reject) => {
    con.con.query("SELECT * FROM country_master where country_name=?",countryName, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var saveStateListQuery = function saveStateListQuery(stateValues) {
  return new Promise((resolve, reject) => {
    con.con.query("insert into state_master(country_id,state_name,created_by,creation_date,updated_by,updation_date) values(?,?,?,?,?,?)",stateValues, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var getStateNameQuery = function getStateNameQuery(stateName) {
  return new Promise((resolve, reject) => {
    con.con.query("SELECT * FROM state_master where state_name=?",stateName, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var saveDistrictListQuery = function saveDistrictListQuery(districtValues) {
  return new Promise((resolve, reject) => {
    con.con.query("insert into district_master(country_id,state_id,district_name,created_by,creation_date,updated_by,updation_date) values(?,?,?,?,?,?,?)",districtValues, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var getDistrictNameQuery = function getDistrictNameQuery(districtName) {
  return new Promise((resolve, reject) => {
    con.con.query("SELECT * FROM district_master where district_name=?",districtName, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var saveAreaListQuery = function saveAreaListQuery(areaValues) {
  return new Promise((resolve, reject) => {
    con.con.query("insert into area_master(country_id,state_id,district_id,area_name,created_by,creation_date,updated_by,updation_date) values(?,?,?,?,?,?,?,?)",areaValues, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

var getAreaNameQuery = function getAreaNameQuery(areaName) {
  return new Promise((resolve, reject) => {
    con.con.query("SELECT * FROM area_master where area_name=?",areaName, function (err, result, fields) {
      if (err) throw err;
      resolve(result)
    });
  });
}

module.exports = {
  getCountryListQuery: getCountryListQuery,
  getStateListQuery: getStateListQuery,
  getDistrictListQuery: getDistrictListQuery,
  getareaListQuery:getareaListQuery,
  saveCountryListQuery: saveCountryListQuery,
  getCountryNameQuery: getCountryNameQuery,
  getStateNameQuery: getStateNameQuery,
  saveStateListQuery: saveStateListQuery,
  saveDistrictListQuery: saveDistrictListQuery,
  getDistrictNameQuery: getDistrictNameQuery,
  saveAreaListQuery: saveAreaListQuery,
  getAreaNameQuery: getAreaNameQuery

}
