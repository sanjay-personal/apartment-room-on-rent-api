var masterRepo = require('../repo/MasterRepo');
var moment = require("moment");


var countryService = function getCountryList() {

    return new Promise(async (resolve, reject) => {
        try {
            let countryList = await masterRepo.getCountryListQuery()
            resolve(countryList)
        } catch (err) {
            console.log("error", err)
            return err
        }

    })

}

// var stateService = function getStateList(countryId) {
// 
//     return new Promise(async (resolve, reject) => {
//         try {
//             let stateList = await masterRepo.getStateListQuery(countryId)
//             resolve(stateList)
//         } catch (err) {
//             console.log("error", err)
//             return err
//         }

//     })

// }

var stateList = function getStateList(data) {

    return new Promise(async (resolve, reject) => {
        try {

            console.log("data",data)
         
            let stateList = await masterRepo.getStateListQuery(data.countryId)
            if(stateList!=null && stateList!=undefined && stateList.length > 0)
            {
            resolve(stateList)
            }
            else{
                reject("Invalid input")
            }
        } catch (err) {
            console.log("error", err)
            return err
        }

    })

}

var districtList = function getDistrictList(data) {

    return new Promise(async (resolve, reject) => {
        try {
            console.log("data",data)
            console.log("country",data.countryId)
            console.log("country",data.countryId)


            let districtList = await masterRepo.getDistrictListQuery(data.countryId,data.stateId)
            
            if(districtList!=null && districtList!=undefined && districtList.length > 0)
            {
            resolve(districtList)
            }
            else{
                reject("Invalid input")
            }
        } catch (err) {
            console.log("error", err)
            return err
        }

    })

}


var areaList = function getareaList(data) {

    return new Promise(async (resolve, reject) => {
        try {
            let areaList = await masterRepo.getareaListQuery(data.countryId,data.stateId,data.districtId)
            
            if(areaList!=null && areaList!=undefined && areaList.length > 0)
            {
            resolve(areaList)
            }
            else{
                reject("Invalid input")
            }
        } catch (err) {
            console.log("error", err)
            return err
        }

    })

}

var saveCountryService = function saveCountryService(countryValues) {
    return new Promise(async (resolve, reject) => {
        try {

            let countryObj = {};

            let countryList;

            countryObj['country_name'] = capitalize(countryValues['country_name'])
            countryObj['created_by'] = 'admin'
            countryObj['creation_date'] = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            countryObj['updated_by'] = 'admin'
            countryObj['updation_date'] = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
           
            let saveCountry = Object.values(countryObj);

            let crossCheckCountryName = await masterRepo.getCountryNameQuery([countryObj['country_name']])
            if(crossCheckCountryName.length === 0) {
             countryList = await masterRepo.saveCountryListQuery(saveCountry);
            } else {
                countryList = "Country Name is Already Existed"
            }

            resolve(countryList)
        } catch (err) {
            console.log("error", err)
            return err
        }

    })

}


var saveStateService = function saveStateService(stateValues) {
    return new Promise(async (resolve, reject) => {
        try {

            let stateObj = {};
            let stateList;
            stateObj['country_id'] = stateValues['country_id']
            stateObj['state_name'] = capitalize(stateValues['state_name'])
            stateObj['created_by'] = 'admin'
            stateObj['creation_date'] = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            stateObj['updated_by'] = 'admin'
            stateObj['updation_date'] = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
           
            let saveState = Object.values(stateObj);

            let crossCheckStateName = await masterRepo.getStateNameQuery([stateObj['state_name']])
            if(crossCheckStateName.length === 0) {
                stateList = await masterRepo.saveStateListQuery(saveState);
            } else {
                stateList = "State Name is Already Existed"
            }

            resolve(stateList)
        } catch (err) {
            console.log("error", err)
            return err
        }

    })

}

var saveDistrictService = function saveDistrictService(districtValues) {
    return new Promise(async (resolve, reject) => {
        try {

            let districtObj = {};
            let districtList;
            districtObj['country_id'] = districtValues['country_id']
            districtObj['state_id'] = districtValues['state_id']
            districtObj['district_name'] = capitalize(districtValues['district_name'])
            districtObj['created_by'] = 'admin'
            districtObj['creation_date'] = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            districtObj['updated_by'] = 'admin'
            districtObj['updation_date'] = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
           
            let saveDistrict = Object.values(districtObj);

            let crossCheckDistrictName = await masterRepo.getDistrictNameQuery([districtObj['district_name']])
            if(crossCheckDistrictName.length === 0) {
                districtList = await masterRepo.saveDistrictListQuery(saveDistrict);
            } else {
                districtList = "District Name is Already Existed"
            }

            resolve(districtList)
        } catch (err) {
            console.log("error", err)
            return err
        }

    })

}


var saveAreaService = function saveAreaService(areaValues) {
    return new Promise(async (resolve, reject) => {
        try {

            let areaObj = {};
            let areaList;
            areaObj['country_id'] = areaValues['country_id']
            areaObj['state_id'] = areaValues['state_id']
            areaObj['district_id'] = areaValues['district_id']
            areaObj['area_name'] = capitalize(areaValues['area_name'])
            areaObj['created_by'] = 'admin'
            areaObj['creation_date'] = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            areaObj['updated_by'] = 'admin'
            areaObj['updation_date'] = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
           
            let saveArea = Object.values(areaObj);

            let crossCheckAreaName = await masterRepo.getAreaNameQuery([areaObj['area_name']])
            if(crossCheckAreaName.length === 0) {
                areaList = await masterRepo.saveAreaListQuery(saveArea);
            } else {
                areaList = "Area Name is Already Existed"
            }

            resolve(areaList)
        } catch (err) {
            console.log("error", err)
            return err
        }

    })

}

function capitalize(s){
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
};




module.exports = {
    countryList: countryService,
    stateList: stateList,
    districtList: districtList,
    areaList:areaList,
    saveCountryService: saveCountryService,
    saveStateService: saveStateService,
    saveDistrictService: saveDistrictService,
    saveAreaService: saveAreaService               

}

