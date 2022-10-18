/**
 * Az adatbazisbol betolti az osszes :vasarloid vasarlooz tartozo karacsonyfat.
 * Ezek mind a res.locals.karacsonyfak-ban kerulnek eltarolasra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};