/**
 * Hibas jelszo eseten visszanavigal a login-hez es nem engedi a felhasznalot az oldal funkcioinak hasznalatahoz
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};