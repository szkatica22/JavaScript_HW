const authMW = require('../middleware/auth/authMW');
const userValidationMW = require('../middleware/auth/userValidationMW');
const renderMW = require('../middleware/render/renderMW');
const logoutMW = require('../middleware/auth/logoutMW');

const getTopVasarlokMW = require('../middleware/vasarlo/getTopVasarlokMW');
const getVasarlokMW = require('../middleware/vasarlo/getVasarlokMW');
const getVasarloMW = require('../middleware/vasarlo/getVasarloMW');
const saveVasarloMW = require('../middleware/vasarlo/saveVasarloMW');
const deleteVasarloMW = require('../middleware/vasarlo/deleteVasarloMW');

const getKaracsonyfakMW = require('../middleware/karacsonyfa/getKaracsonyfakMW');
const getKaracsonyfaMW = require('../middleware/karacsonyfa/getKaracsonyfaMW');
const saveKaracsonyfaMW = require('../middleware/karacsonyfa/saveKaracsonyfaMW');
const deleteKaracsonyfaMW = require('../middleware/karacsonyfa/deleteKaracsonyfaMW');

const customerModel = require('../models/vasarlo');
const treeModel = require('../models/karacsonyfa');

module.exports = function (app) {
    const objectRepo = {
        customerModel: customerModel,
        treeModel: treeModel,
    };

    app.use('/vasarlok/new',
        authMW(objectRepo),
        saveVasarloMW(objectRepo),
        renderMW(objectRepo, 'vasarlo'));

    app.use('/vasarlok/edit/:vasarloid',
        authMW(objectRepo),
        getVasarloMW(objectRepo),
        saveVasarloMW(objectRepo),
        renderMW(objectRepo, 'vasarlo'));

    app.get('/vasarlok/delete/:vasarloid',
        authMW(objectRepo),
        getVasarloMW(objectRepo),
        deleteVasarloMW(objectRepo),
        renderMW(objectRepo, 'vasarlok'));

    app.get('/vasarlok',
        authMW(objectRepo),
        getVasarlokMW(objectRepo),
        renderMW(objectRepo, 'vasarlok'));

    app.use('/karacsonyfak/:vasarloid/new',
        authMW(objectRepo),
        getVasarloMW(objectRepo),
        saveKaracsonyfaMW(objectRepo),
        renderMW(objectRepo, 'karacsonyfa'));

    app.use('/karacsonyfak/:vasarloid/edit/:karacsonyfaid',
        authMW(objectRepo),
        getVasarloMW(objectRepo),
        getKaracsonyfaMW(objectRepo),
        saveKaracsonyfaMW(objectRepo),
        renderMW(objectRepo, 'karacsonyfa'));

    app.get('/karacsonyfak/:vasarloid/delete/:karacsonyfaid',
        authMW(objectRepo),
        getVasarloMW(objectRepo),
        getKaracsonyfaMW(objectRepo),
        deleteKaracsonyfaMW(objectRepo),
        renderMW(objectRepo, 'karacsonyfak'));

    app.get('/karacsonyfak/:vasarloid',
        authMW(objectRepo),
        getVasarloMW(objectRepo),
        getKaracsonyfakMW(objectRepo),
        renderMW(objectRepo, 'karacsonyfak'));

    app.use('/logout', logoutMW(objectRepo));

    app.use('/',
        getTopVasarlokMW(objectRepo),
        userValidationMW(objectRepo),
        renderMW(objectRepo, 'index'));
}