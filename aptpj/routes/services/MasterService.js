var masterRepo = require('../repo/MasterRepo')

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


module.exports = {
    countryList: countryService,
    stateList: stateList,
    districtList: districtList,
    areaList:areaList               

}

