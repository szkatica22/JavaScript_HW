/**
 * Ha a felhasznalo nincs bejelentkezve, akkor atiranyit a /-re
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(typeof req.session.belepve === 'undefined'
            || req.session.belepve !== true){
            return res.redirect('/');
        }
        return next();
    };

};