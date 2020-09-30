const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
    if (isNaN(date)) {
        throw Error;
    }
    date = date.toString();
    if (date.indexOf('Mar') !== -1 || date.indexOf('Apr') !== -1 || date.indexOf('May') !== -1) {
        return 'spring';
    } else if (date.indexOf('Jun') !== -1 || date.indexOf('Jul') !== -1 || date.indexOf('Aug') !== -1) {
        return 'summer';
    } else if (date.indexOf('Sep') !== -1 || date.indexOf('Oct') !== -1 || date.indexOf('Nov') !== -1) {
        return 'autumn';
    } else if (date.indexOf('Dec') !== -1 || date.indexOf('Jan') !== -1 || date.indexOf('Feb') !== -1) {
        return 'winter';
    }
};