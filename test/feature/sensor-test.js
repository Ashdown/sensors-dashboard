/*global describe, it*/

let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../../app");
let should = chai.should();

chai.use(chaiHttp);

describe("Sensors", function () {
    it("should return a 200 response", function (done) {
        chai.request(app)
            .get("/sensors")
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it("should return a valid json response", function (done) {
        chai.request(app)
            .get("/sensors")
            .end(function (err, res) {
                let isValidJson = true;
                if (!/^[\[|\{](\s|.*|\w)*[\]|\}]$/.test(res.body)) {
                    isValidJson = false;
                }
                isValidJson.should.equal(true);
                done();
            });
    });
    it("should return a list of 3 sensors", function (done) {
        chai.request(app)
            .get("/sensors")
            .end(function (err, res) {
                let sensors = res.body;
                (sensors.length).should.equal(3);
                done();
            });
    });
});