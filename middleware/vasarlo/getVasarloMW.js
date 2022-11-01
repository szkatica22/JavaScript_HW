/**
 * Megfelelo vasarlo betoltese a :vasarloid alapjan az adatbazisbol
 * Az eredmeny elmentesre kerul a res.locals.vasarlo-ba
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const vasarloModel = requireOption(objectRepository, 'customerModel');

    return function(req, res, next){

        vasarloModel.findOne({
            _id: req.params['vasarloid']
        }, function (err, result){
            if((err) || (!result)){
                return res.redirect('/vasarlok');
            }

            res.locals.vasarlo = result;
            return next();
        });

        // res.locals.vasarlo = {
        //     _id: 'id1',
        //     nev: "Nagy Józsi",
        //     email: "njozsi7@valami.hu",
        //     varos: "Győr",
        //     fakszama: "2",
        // };

        // return next();
    }
}