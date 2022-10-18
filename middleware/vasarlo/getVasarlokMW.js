/**
 * Osszes vasarlo betoltese az adatbazisbol
 * Az eredmeny elmentesre kerul a res.locals.vasarlok-ba
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function(req, res, next){
        next();
    }
}