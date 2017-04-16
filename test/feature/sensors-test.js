/*global describe, it*/

let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../../app");
let should = chai.should();

chai.use(chaiHttp);

describe("/sensors/:sensorid", function () {

    describe("with invalid sensor id", function(){

        let sensorid = "1234567890";

        it("should return a 200 response for a valid sensor id", function (done) {
            chai.request(app)
                .get("/sensor/" + sensorid)
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
        });
        it("should return empty json object", function(done) {
            chai.request(app)
                .get("/sensor/" + sensorid)
                .end(function (err, res) {
                    let sensors = res.body;
                    (sensors).should.eql([]);
                    done();
                });

        });
    });

    describe("with valid sendor id", function(){

        let sensorid = "46c634d04cc2fb4a4ee0f1596c5330328130ff80";

        it("should return a 200 response for a valid sensor id", function (done) {
            chai.request(app)
                .get("/sensor/" + sensorid)
                .end(function (err, res) {
                    res.should.have.status(200);
                    done();
                });
        });

        it("should return valid sensor attributes", function (done) {
            chai.request(app)
                .get("/sensor/" + sensorid)
                .end(function (err, res) {
                    (res.body).should.be.a("array");
                    (res.body.length).should.equal(126);
                    done();
                });
        });

        it("should return valid data for a sensor", function (done) {
            chai.request(app)
                .get("/sensor/" + sensorid)
                .end(function (err, res) {
                    (res.body[0].time).should.be.a("number");
                    (res.body[0].value).should.be.a("number");
                    done();
                });
        });
    });

});