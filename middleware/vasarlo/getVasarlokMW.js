/**
 * Osszes vasarlo betoltese az adatbazisbol
 * Az eredmeny elmentesre kerul a res.locals.vasarlok-ba
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const vasarloModel = requireOption(objectRepository, 'customerModel');

    return function(req, res, next){
        return vasarloModel.find({
        }, function (err, results) {
            if(err){
                return next(new Error('Error getting vasarlok'));
            }
            res.locals.vasarlok = results;
            return next();
        });
    }
}