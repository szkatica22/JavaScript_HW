/**
 * Az adatbazisbol betolti az osszes :vasarloid vasarlooz tartozo karacsonyfat.
 * Ezek mind a res.locals.karacsonyfak-ban kerulnek eltarolasra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const karacsonyfaModel = requireOption(objectrepository, 'treeModel');

    return function (req, res, next) {
        return karacsonyfaModel.find({
            owner_ID: req.params['vasarloid']
        }, function (err, results) {
            if(err || (!results)){
                return next(err);
            }
            res.locals.karacsonyfak = results;
            return next();
        });
    };
};