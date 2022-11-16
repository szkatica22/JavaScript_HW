/**
 * A beerkezo POST parametert ellenorzi, hogy helyes-e a jelszo, felhasznalonev. Ha igen tovabbiranyit a /vasarlok oldalra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.body.password === 'undefined' ) {
            return next();
        }

        if(req.body.password === 'ittakaracsony'){
            req.session.belepve = true;
            return req.session.save(error => {
                if(error){
                    return next(new Error('Error login'));
                }
                return res.redirect('/vasarlok')
            });
        }
        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};