/**
 * Kijelentkezes
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {
        req.session.destroy(err => {
            if(err){
                return next(new Error('Error logout'));
            }
            return res.redirect('/');
        })
    };

};