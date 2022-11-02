/**
 * POST parameter hasznalata egy uj karacsonyfa mentesere / mar meglevo adatainak modositasara az adatbazisban.
 * Ha a res.locals.karacsonyfa letezik, akkor ez egy mar letezo karacsonyfa adatainak frissitese lesz,
 * Ha nem, akkor egy ujnak a letrehozasa es mentese.
 * A sikeres mentes utan visszavisz a /karacsonyfak/_vasarloid oldalra.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const karacsonyfaModel = requireOption(objectRepository, 'treeModel');
    const vasarloModel = requireOption(objectRepository, 'customerModel');

    return function(req, res, next){


        if((typeof req.body.name === 'undefined') || (typeof req.body.type === 'undefined') ||
            (typeof req.body.height === 'undefined') || (typeof req.body.price === 'undefined')){
            return next();
        } else {
            if(res.locals.karacsonyfa === undefined){
                const karacsonyfa = new karacsonyfaModel({
                    name: req.body.name,
                    type: req.body.type,
                    height: req.body.height,
                    price: req.body.price,
                    owner_ID: req.params['vasarloid']
                });
                karacsonyfa.save(function (error) {
                    if(error){
                        return next(new Error('Error saving karacsonyfa'));
                    }
                });
                vasarloModel.updateOne(
                    {_id: req.params['vasarloid']},
                    {$inc: {treeNum: +1}}, function (error) {
                        if(error){
                            return next(new Error('Error updating vasarlo'));
                        }
                });
            } else {
                karacsonyfaModel.updateOne(
                    {_id: req.params['karacsonyfaid']},
                {
                    name: req.body.name,
                    type: req.body.type,
                    height: req.body.height,
                    price: req.body.price,
                }, function (error) {
                        if(error){
                            return next(new Error('Error updating karacsonyfa'));
                        }
                    });
            }
        }
        return res.redirect(`/karacsonyfak/${req.params['vasarloid']}`);
        // return next();
    }
}