const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            if (i !== (array.length - 1)) {
                if (array[i] === '--discard-next') {
                    i++;
                } else if (array[i] === '--discard-prev') {
                    result = result.slice(0, -1);
                } else if (array[i] === '--double-next') {
                    result.push(array[i + 1]);
                } else if (array[i] === '--double-prev') {
                    //result = result[ - 1];
                }
            } else {
                result = result.slice(0, -1);
            }

        } else {
            result.push(array[i]);
        }
    }
    return result;
};