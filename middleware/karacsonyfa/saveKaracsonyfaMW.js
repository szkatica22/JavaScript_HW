/**
 * POST parameter hasznalata egy uj karacsonyfa mentesere / mar meglevo adatainak modositasara az adatbazisban.
 * Ha a res.locals.karacsonyfa letezik, akkor ez egy mar letezo karacsonyfa adatainak frissitese lesz,
 * Ha nem, akkor egy ujnak a letrehozasa es mentese.
 * A sikeres mentes utan visszavisz a /karacsonyfak/_vasarloid oldalra.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function(req, res, next){
        next();
    }
}