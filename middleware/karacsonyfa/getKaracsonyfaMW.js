/**
 * A :karacsonyfaid alapjan betolti az adatbazisbol a megfelelo karacsonyfat a res.locals.karacsonyfa-ba
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const karacsonyfaModel = requireOption(objectrepository, 'treeModel');

    return function (req, res, next) {
        return karacsonyfaModel.findOne({
            owner_ID: req.params['vasarloid'],
            _id: req.params['karacsonyfaid']
        }, function (err, result) {
            if((err) || (!result)){
                return res.redirect('/karacsonyfak/', req.params['vasarloid']);
            }
            res.locals.karacsonyfa = result;
            return next();
        });
    };
};