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
    return err
  }
});

router.get('/state/:countryId', async function (req, res, next) {
  try {
    let stateList = await masterService.stateList(req.params.countryId)
    res.send({ primary: stateList, status: { code: "success", message: "success" } });
  }
  catch (err) {
    console.log("error", err)
    return err
  }
});

module.exports = router;