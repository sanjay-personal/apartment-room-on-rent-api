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
            console.log("country",data.countryId)
         
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

var districtService = function getDistrictList(countryId,stateId) {

    return new Promise(async (resolve, reject) => {
        try {
            let districtList = await masterRepo.getDistrictListQuery(countryId,stateId)
            
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

module.exports = {
    countryList: countryService,
    stateList: stateList,
    districtList: districtService               

}

