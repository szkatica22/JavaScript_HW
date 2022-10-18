/**
 * Megfelelo vasarlo kitorlese az adatbazisbol. A torolt elem a res.locals.vasarlo
 * A torles utan visszavisz a /vasarlok oldalra.
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function(req, res, next){
        next();
    }
}