process.env.NODE_ENV = 'test';
process.env.PORT = 5050;
const mocha = require('mocha');

const describe = mocha.describe;
const it = mocha.it;
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();
let createdId = null;
const app = require('../app');

describe('Check person routes', () => {
  it('route get api/persons/all should return all persons', async () => {
    const result = await chai.request(app).get('/api/persons/all');
    await result.should.have.status(200);
    await result.body.should.have.property('success').eql(true);
    await result.body.should.be.a('object');
  });

  it('route get api/persons/create should create a new person', async () => {
    const payload = {
      firstname: 'test',
      lastname: 'test',
    };
    const result = await chai.request(app).post('/api/persons/create').send(payload);
    await result.should.have.status(200);
    await result.body.should.have.property('success').eql(true);
    await result.body.should.be.a('object');
    createdId = result.body.data._id;
  });

  it('route get api/persons/person/:id should return person by id', async () => {
    const result = await chai.request(app).get(`/api/persons/person/${createdId}`);
    await result.should.have.status(200);
    await result.body.should.have.property('success').eql(true);
    await result.body.should.be.a('object');
  });

  it('route post api/persons/search should search person by name', async () => {
    const result = await chai.request(app).post('/api/persons/search').send({ firstname: 'test' });
    await result.should.have.status(200);
    await result.body.should.have.property('success').eql(true);
    await result.body.should.be.a('object');
  });


  it('route get api/persons/create should update a person', async () => {
    const payload = {
      id: createdId,
      firstname: 'test2',
      lastname: 'test',
    };
    const result = await chai.request(app).put('/api/persons/update').send(payload);
    await result.should.have.status(200);
    await result.body.should.have.property('success').eql(true);
    await result.body.should.be.a('object');
  });

  it('route get api/persons/delete/:id should delete person by id', async () => {
    const result = await chai.request(app).delete(`/api/persons/delete/${createdId}`);
    await result.should.have.status(200);
    await result.body.should.have.property('success').eql(true);
    await result.body.should.be.a('object');
  });
});
