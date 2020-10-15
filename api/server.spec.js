const supertest = require('supertest');

const server = require('./server');

describe('server.js', () => {
  describe('Get /', () => {
    it('Should return 200 OK', () => {
      return supertest(server)
        .get('/')
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it('should have a body', () => {
      return supertest(server)
        .get('/')
        .then((res) => {
          expect(res.body).toEqual({ api: 'up' });
        });
    });
  });
});

//the res object has a property called body
//write a test for the body with the property api and value up
