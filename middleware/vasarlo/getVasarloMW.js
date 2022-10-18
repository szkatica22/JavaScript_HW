/**
 * Megfelelo vasarlo betoltese a :vasarloid alapjan az adatbazisbol
 * Az eredmeny elmentesre kerul a res.locals.vasarlo-ba
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function(req, res, next){
        next();
    }
}