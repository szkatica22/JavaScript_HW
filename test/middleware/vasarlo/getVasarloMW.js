var expect = require('chai').expect;
var getVasarloMW = require('../../../middleware/vasarlo/getVasarloMW');

describe('getVasarlo middleware ', function () {
    it('should set the res.locals.vasarlo with a vasarlo object from the db', function (done){
        const mw = getVasarloMW({
            customerModel: {
                findOne: (param, cb) =>{
                    expect(param).to.be.eql({_id: "7"});
                    cb(null, 'mockvasarlo');
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
            params: {
                vasarloid: "7"
            }
        },
        resMock,
        (err) => {
            expect(typeof err).to.be.eql('undefined');
            expect(resMock.locals).to.be.eql({vasarlo: "mockvasarlo"});
            done();
        });
    });
    it('should call next with error when db error', function (done){
        const mw = getVasarloMW({
            customerModel: {
                findOne: (param, cb) =>{
                    expect(param).to.be.eql({_id: "7"});
                    cb('ajjajj db error', null);
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
                params: {
                    vasarloid: "7"
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql('ajjajj db error');
                done();
            });
    });
    it('should call next when not found vasarlo in the db', function (done){
        const mw = getVasarloMW({
            customerModel: {
                findOne: (param, cb) =>{
                    expect(param).to.be.eql({_id: "7"});
                    cb(undefined, null);
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
                params: {
                    vasarloid: "7"
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