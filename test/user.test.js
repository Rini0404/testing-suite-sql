// __tests__/user.test.js
const sequelize = require('../db');
const User = require('../models/Users');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});


describe('User Model', () => {
  it('creates a new user', async () => {
    const user = await User.create({
      username: 'testuser',
      password: 'testpassword',
    });

    expect(user.id).toBe(1);
    expect(user.username).toBe('testuser');
  });
});


