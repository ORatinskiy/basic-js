const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (members === null || members === undefined || members.length === undefined) {
        return false;
    }
    members = members.sort();
    let result = [];
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string' && members[i] !== ' ') {
            for (let j = 0; j < members[i].length; j++) {
                if (members[i][j] === ' ') {
                    continue;
                } else {
                    result[i] = members[i][j].toUpperCase();
                    break;
                }
            }
        }
    }
    result = result.sort();
    result = result.join('');
    return result;
};