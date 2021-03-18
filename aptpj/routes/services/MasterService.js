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

var stateService = function getStateList(countryId) {

    return new Promise(async (resolve, reject) => {
        try {
            let stateList = await masterRepo.getStateListQuery(countryId)
            resolve(stateList)
        } catch (err) {
            console.log("error", err)
            return err
        }

    })

}

module.exports = {
    countryList: countryService,
    stateList: stateService


}

