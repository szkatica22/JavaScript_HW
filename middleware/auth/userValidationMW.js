/**
 * A beerkezo POST parametert ellenorzi, hogy helyes-e a jelszo, felhasznalonev. Ha igen tovabbiranyit a /vasarlok oldalra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};