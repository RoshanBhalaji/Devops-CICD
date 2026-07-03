const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return a JSON response with a hello message', async () => {
    const response = await request(app).get('/');
    
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toHaveProperty('message', 'Hello, World!');
    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body).toHaveProperty('timestamp');
  });
});
