/**
 * Ha a felhasznalo nincs bejelentkezve, akkor atiranyit a /-re
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        if(typeof req.session.userid === 'undefined'){
            return res.redirect('/');
        }
        return next();
    };

};