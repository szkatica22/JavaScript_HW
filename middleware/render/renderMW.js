/**
 * Template hasznalataval betolti a megfelelo oldalt
 */
const requireOption = require('../requireOption');

module.exports = function (objectRepository, viewName) {

    return function (req, res) {
        res.render(viewName, res.locals);
        // console.log('render: ' + viewName);
        // res.end('Template: ' + viewName);
    };

};