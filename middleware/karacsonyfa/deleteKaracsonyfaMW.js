/**
 * a res.locals.karacsonyfa entitas/karacsonyfa torlese az adatbazisbol
 * Sikeres torles utan atiranyit a /karacsonyfak/:vasarloid-ra
 */
const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const karacsonyfaModel = requireOption(objectRepository, 'treeModel');
    const vasarloModel = requireOption(objectRepository, 'customerModel');

    return function (req, res, next) {
        karacsonyfaModel.deleteOne({
            _id: req.params['karacsonyfaid']
        }, function (err) {
            if(err){
                return next(new Error('Error deleting karacsonyfa'));
            }
            vasarloModel.updateOne(
                {_id: req.params['vasarloid']},
                {$inc: {treeNum: -1}}, function (error) {
                    if(error){
                        return next(new Error('Error updating vasarlo'));
                    }
                    return res.redirect(`/karacsonyfak/${req.params['vasarloid']}`);
                    // return next();
                });
        });
    };
};