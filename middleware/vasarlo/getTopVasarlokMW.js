/**
 * A vasarlo es a hozzajuk tartozo adatok betoltese az adatbazisbol
 * Az eredmeny a res.locals.topvasarlok-ba kerul eltarolasra
 */
const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    const topVasarloModel = requireOption(objectRepository, 'customerModel');

    return function(req, res, next){
        return topVasarloModel.find({
            treeNum: { $gt: 1},
        }).sort({treeNum : -1}).exec(function (err, results) {
            if(err){
                return next(new Error('Error getting topVasarlok'));
            }
            res.locals.topvasarlok = results;
            return next();
        });
    }
};