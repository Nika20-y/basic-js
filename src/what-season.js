const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(date===null||date===undefined){
        return 'Unable to determine the time of year!'
    }
    if(Object.prototype.toString.call(date) === '[object Date]') {
        let Date = date;
        let month = Date.getMonth();
        if (month < 2 || month === 11) {
            return 'winter'
        }
        if (month < 5) {
            return 'spring';
        }
        if (month < 8) {
            return 'summer'
        }
        if (month < 11) {
            return 'autumn'
        }
    }
    else {
        throw new Error('Error')
    }
};
