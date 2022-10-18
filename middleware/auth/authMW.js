/**
 * Ha a felhasznalo nincs bejelentkezve, akkor atiranyit a /-re
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};