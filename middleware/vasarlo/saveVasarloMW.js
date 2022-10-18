/**
 * POST parameter hasznalata egy uj vasarlo mentesere / mar meglevo adatainak modositasara az adatbazisban.
 * Ha a res.locals.vasarlo letezik, akkor ez egy mar letezo vasarlo adatainak frissitese lesz,
 * Ha nem, akkor egy ujnak a letrehozasa es mentese.
 * A sikeres mentes utan visszavisz a /vasarlok oldalra.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function(req, res, next){
        next();
    }
}