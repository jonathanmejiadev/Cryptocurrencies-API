const request = require('supertest');

const { cryptoApp, db } = require('../loaders');
const app = cryptoApp.app;

let userTest = {
    username: 'usertest',
    password: 'passtest',
    email: 'email@test.com'
};

describe('POST /auth/register', () => {
    test('register a valid user', async () => {
        const res = await request(app)
            .post('/v1/register')
            .send(userTest);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('success');
        expect(res.body.success).toEqual(true);
        expect(res.body).toHaveProperty('data');
    });
});

afterAll(async () => {
    // Closing the DB connection allows Jest to exit successfully.
    await db.sequelize.close();
});