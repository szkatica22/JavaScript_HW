/**
 * Megfelelo vasarlo betoltese a :vasarloid alapjan az adatbazisbol
 * Az eredmeny elmentesre kerul a res.locals.vasarlo-ba
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function(req, res, next){

        res.locals.vasarlo = {
            _id: 'id1',
            nev: "Nagy Józsi",
            email: "njozsi7@valami.hu",
            varos: "Győr",
            fakszama: "2",
        };

        return next();
    }
}