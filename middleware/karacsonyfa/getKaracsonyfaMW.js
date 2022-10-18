/**
 * A :karacsonyfaid alapjan betolti az adatbazisbol a megfelelo karacsonyfat a res.locals.karacsonyfa-ba
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.karacsonyfa = {
            _id: "fa1",
            nev: "Lackó",
            tipus: "Luc",
            magassag: "0.8",
            ar: "8000"
        };
        return next();
    };
};