/**
 * Megfelelo vasarlo kitorlese az adatbazisbol. A torolt elem a res.locals.vasarlo
 * A torles utan visszavisz a /vasarlok oldalra.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const karacsonyfaModel = requireOption(objectRepository, 'treeModel');
    const vasarloModel = requireOption(objectRepository, 'customerModel');

    return function(req, res, next){
        vasarloModel.deleteOne({
            _id: req.params['vasarloid']
        }, function (err, result) {
            if(err){
                return next(new Error('Error deleting vasarlo'));
            }
            karacsonyfaModel.deleteMany(
                {owner_ID: req.params['vasarloid']},
                function (error, secondResult) {
                    if(error){
                        return next(new Error('Error deleting user\'s karacsonyfak'));
                    }
                    return res.redirect('/vasarlok');
                });
        });
    }
}