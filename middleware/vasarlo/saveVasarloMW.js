/**
 * POST parameter hasznalata egy uj vasarlo mentesere / mar meglevo adatainak modositasara az adatbazisban.
 * Ha a res.locals.vasarlo letezik, akkor ez egy mar letezo vasarlo adatainak frissitese lesz,
 * Ha nem, akkor egy ujnak a letrehozasa es mentese.
 * A sikeres mentes utan visszavisz a /vasarlok oldalra.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const vasarloModel = requireOption(objectRepository, 'customerModel');

    return function(req, res, next){

        if((typeof req.body.name === 'undefined') || (typeof req.body.email === 'undefined') ||
            (typeof req.body.city === 'undefined')){
            return next();
        } else {
            if(res.locals.vasarlo === undefined){
                const vasarlo = new vasarloModel({
                    name: req.body.name,
                    email: req.body.email,
                    city: req.body.city,
                    treeNum: 0
                });
                vasarlo.save(function (error) {
                    if(error){
                        return next(new Error('Error saving vasarlo'));
                    }
                });
            } else {
                vasarloModel.updateOne(
                    {_id: req.params['vasarloid']},
                    {
                        name: req.body.name,
                        email: req.body.email,
                        city: req.body.city,
                    }, function (error) {
                        if(error){
                            return next(new Error('Error updating vasarlo'));
                        }
                    });
            }
            res.redirect('/vasarlok');
            // return next();
        }
    }
}