var expect = require('chai').expect;
var getKaracsonyfakMW = require('../../../middleware/karacsonyfa/getKaracsonyfakMW');

describe('getKaracsonyfak middleware ', function () {
    it('should set the res.locals.karacsonyfak with karacsonyfa objects from the db', function (done){
        const mw = getKaracsonyfakMW({
            treeModel: {
                find: (param, cb) =>{
                    expect(param).to.be.eql({owner_ID: "22"});
                    cb(null, 'mockkaracsonyfak');
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
                params: {
                    vasarloid: "22"
                }
            },
            resMock,
            (err) => {
                expect(typeof err).to.be.eql('undefined');
                expect(resMock.locals).to.be.eql({karacsonyfak: "mockkaracsonyfak"});
                done();
            });
    });
    it('should call next with error when db error', function (done){
        const mw = getKaracsonyfakMW({
            treeModel: {
                find: (param, cb) =>{
                    expect(param).to.be.eql({owner_ID: "22"});
                    cb('ajjajj db error', null);
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
                params: {
                    vasarloid: "22"
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql('ajjajj db error');
                done();
            });
    });
    it('should call next when not found karacsonyfak in the db', function (done){
        const mw = getKaracsonyfakMW({
            treeModel: {
                find: (param, cb) =>{
                    expect(param).to.be.eql({owner_ID: "22"});
                    cb(undefined, null);
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
                params: {
                    vasarloid: "22"
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({});
                done();
            });
    });
});