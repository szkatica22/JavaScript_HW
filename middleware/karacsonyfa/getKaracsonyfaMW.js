/**
 * A :karacsonyfaid alapjan betolti az adatbazisbol a megfelelo karacsonyfat a res.locals.karacsonyfa-ba
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};