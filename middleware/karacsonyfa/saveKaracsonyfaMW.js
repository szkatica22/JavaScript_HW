/**
 * POST parameter hasznalata egy uj karacsonyfa mentesere / mar meglevo adatainak modositasara az adatbazisban.
 * Ha a res.locals.karacsonyfa letezik, akkor ez egy mar letezo karacsonyfa adatainak frissitese lesz,
 * Ha nem, akkor egy ujnak a letrehozasa es mentese.
 * A sikeres mentes utan visszavisz a /karacsonyfak/_vasarloid oldalra.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function(req, res, next){

        console.log("USERID: ", res.locals.vasarlo._id);

        if((typeof req.body.nev === 'undefined') || (typeof req.body.tipus === 'undefined') ||
            (typeof req.body.magassag === 'undefined') || (typeof req.body.ar === 'undefined')){
            return next();
        }
        console.log("Karacsonyfa adatai sikeresen mentve");
        console.log(req.body);
        res.redirect('/karacsonyfak/', res.locals.vasarlo._id);  // todo

        // return next();
    }
}