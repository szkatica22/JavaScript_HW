/**
 * Osszes vasarlo betoltese az adatbazisbol
 * Az eredmeny elmentesre kerul a res.locals.vasarlok-ba
 */

const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    return function(req, res, next){

        res.locals.vasarlok = [
            {
                _id: 'id1',
                nev: "Nagy Józsi",
                email: "njozsi7@valami.hu",
                varos: "Győr",
                fakszama: "2",
            },
            {
                _id: 'id2',
                nev: "Oláh Szilvi",
                email: "szilviolah@email.com",
                varos: "Budapest",
                fakszama: "1",
            },
            {
                _id: 'id3',
                nev: "Horváth András",
                email: "alibaba48@cim.hu",
                varos: "Érd",
                fakszama: "1",
            }
        ];

        return next();
    }
}