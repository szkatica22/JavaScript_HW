/**
 * Az adatbazisbol betolti az osszes :vasarloid vasarlooz tartozo karacsonyfat.
 * Ezek mind a res.locals.karacsonyfak-ban kerulnek eltarolasra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.karacsonyfak = [
            {
                _id: "fa1",
                nev: "Lackó",
                tipus: "Luc",
                magassag: "0.8",
                ar: "8000"
            },
            {
                _id: "fa2",
                nev: "Csillag",
                tipus: "Nordmann",
                magassag: "1.5",
                ar: "14000"
            },
        ];

        return next();
    };
};