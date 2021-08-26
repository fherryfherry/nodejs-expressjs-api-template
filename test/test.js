let faker = require("faker");
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

const baseDomain = 'localhost:3001';
let baseURL = '';

describe('API Product', () => {
    baseURL = '/products';

    describe('API List', () => {

        it("list should receive 200 response code", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("list should be a object", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/')
                .end((err, res) => {
                    res.body.should.have.be.a("object");
                    done();
                });
        });

        it("list should have : status", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/')
                .end((err, res) => {
                    res.body.should.have.property("status");
                    done();
                });
        });

        it("list should have : message", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/')
                .end((err, res) => {
                    res.body.should.have.property("message");
                    done();
                });
        });

        it("list should have : data", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/')
                .end((err, res) => {
                    res.body.should.have.property("data");
                    done();
                });
        });

    });

    describe('API Detail', () => {

        let data = [];

        chai.request(baseDomain)
            .get(baseURL + '/')
            .end((err, res) => {
                data = res.body.data;
            });

        it("list should receive 200 response code", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/detail/' + data[0].id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        it("list should be a object", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/detail/' + data[0].id)
                .end((err, res) => {
                    res.body.should.have.be.a("object");
                    done();
                });
        });

        it("list should have : status", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/detail/' + data[0].id)
                .end((err, res) => {
                    res.body.should.have.property("status");
                    done();
                });
        });

        it("list should have : message", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/detail/' + data[0].id)
                .end((err, res) => {
                    res.body.should.have.property("message");
                    done();
                });
        });

        it("list should have : data", (done) => {
            chai.request(baseDomain)
                .get(baseURL + '/detail/' + data[0].id)
                .end((err, res) => {
                    res.body.should.have.property("data");
                    done();
                });
        });

    });


    describe('API Create', () => {

        it("should can POST data", (done) => {
            let data = {
              sku: "SKU" + faker.dataType.number(),
              name: faker.commerce.productName(),
              description: faker.commerce.productDescription(),
              stock: 100,
              price: faker.commerce.price()
            };
            chai.request(baseDomain)
                .post(baseURL + '/create')
                .send(data)
                .end((err, res) => {
                    if(err) done(err);

                    res.should.have.status(200);
                    done();
                });
        });

    });

});