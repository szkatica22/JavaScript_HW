/**
 * a res.locals.karacsonyfa entitas/karacsonyfa torlese az adatbazisbol
 * Sikeres torles utan atiranyit a /karacsonyfak/:vasarloid-ra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};