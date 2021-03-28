var express = require('express');
var router = express.Router();
var masterService = require('../services/MasterService')

/* GET country listing. */
router.get('/country', async function (req, res, next) {
  try {
    let countryList = await masterService.countryList()
    res.send({ primary: countryList, status: { code: "success", message: "success" } });
  }
  catch (err) {
    console.log("error", err)
    if(err==="Invalid input")
    {
    res.send({  status: { code: "error", message: err } });
    }
    else{
      
    res.send({ status: { code: "error", message: "error" } });
    }
  }
});

router.get('/state', async function (req, res, next) {
  try {
   
    let stateList = await masterService.stateList(req.query)
    res.send({ primary: stateList, status: { code: "success", message: "success" } });
  }
  catch (err) {
    console.log("error", err)
    if(err==="Invalid input")
    {
    res.send({  status: { code: "error", message: err } });
    }
    else{
      
    res.send({ status: { code: "error", message: "error" } });
    }
  }
});


router.get('/district', async function (req, res, next) {
  try {
   
    let districtList = await masterService.districtList(req.query)
    res.send({ primary: districtList, status: { code: "success", message: "success" } });
  }
  catch (err) {
    console.log("error", err)
    if(err==="Invalid input")
    {
    res.send({  status: { code: "error", message: err } });
    }
    else{
      
    res.send({ status: { code: "error", message: "error" } });
    }
  }
});

router.get('/area', async function (req, res, next) {
  try {
   
    let areaList = await masterService.areaList(req.query)
    res.send({ primary: areaList, status: { code: "success", message: "success" } });
  }
  catch (err) {
    console.log("error", err)
    if(err==="Invalid input")
    {
    res.send({  status: { code: "error", message: err } });
    }
    else{
      
    res.send({ status: { code: "error", message: "error" } });
    }
  }
});

router.post('/country', async function (req, res, next) {
  try {
    let saveCountry = await masterService.saveCountryService(req.body)
    if(saveCountry == 'Country Name is Already Existed') {
      res.send({ status: { code: "error", message: saveCountry } });
    } else {
      res.send({ primary: saveCountry, status: { code: "success", message: "success" } });
    }
  }
  catch (err) {
    res.send({ status: { code: "error", message: "error" } });
  }
});

router.post('/state', async function (req, res, next) {
  try {
    let saveState = await masterService.saveStateService(req.body)
    if(saveState == 'State Name is Already Existed') {
      res.send({ status: { code: "error", message: saveState } });
    } else {
      res.send({ primary: saveState, status: { code: "success", message: "success" } });
    }
  }
  catch (err) {
    res.send({ status: { code: "error", message: "error" } });
  }
});

router.post('/district', async function (req, res, next) {
  try {
    let saveDistrict = await masterService.saveDistrictService(req.body)
    if(saveDistrict == 'District Name is Already Existed') {
      res.send({ status: { code: "error", message: saveDistrict } });
    } else {
      res.send({ primary: saveDistrict, status: { code: "success", message: "success" } });
    }
  }
  catch (err) {
    res.send({ status: { code: "error", message: "error" } });
  }
});

router.post('/area', async function (req, res, next) {
  try {
    let saveArea = await masterService.saveAreaService(req.body)
    if(saveArea == 'Area Name is Already Existed') {
      res.send({ status: { code: "error", message: saveArea } });
    } else {
      res.send({ primary: saveArea, status: { code: "success", message: "success" } });
    }
  }
  catch (err) {
    res.send({ status: { code: "error", message: "error" } });
  }
});


module.exports = router;