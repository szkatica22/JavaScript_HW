/**
 * a res.locals.karacsonyfa entitas/karacsonyfa torlese az adatbazisbol
 * Sikeres torles utan atiranyit a /karacsonyfak/:vasarloid-ra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const karacsonyfaModel = requireOption(objectrepository, 'treeModel');
    const vasarloModel = requireOption(objectrepository, 'customerModel');

    return function (req, res, next) {
        karacsonyfaModel.deleteOne({
            _id: req.params['karacsonyfaid']
        }, function (err, result) {
            if(err){
                return next(new Error('Error deleting karacsonyfa'));
            }
            vasarloModel.updateOne(
                {_id: req.params['vasarloid']},
                {$inc: {treeNum: -1}}, function (error, result) {
                    if(error){
                        return next(new Error('Error updating vasarlo'));
                    }
                    return res.redirect(`/karacsonyfak/${req.params['vasarloid']}`);
                });
        });
    };
};