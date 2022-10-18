/**
 * A vasarlo es a hozzajuk tartozo adatok betoltese az adatbazisbol
 * Az eredmeny a res.locals.topvasarlok-ba kerul eltarolasra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};