/**
 * Kijelentkezes
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        req.session.destroy(function (err) {
            if(err){
                return next(new Error('Error logout'));
            }
            return next();
        })
    };

};