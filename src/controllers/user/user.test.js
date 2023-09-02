import { createUser } from './';
import sequelize from '../../db';
import User from '../../models/Users';

// Initialize the mock db
beforeAll(async () => {
  await sequelize.sync({ force: true });
  await User.create({
    username: 'riniTest',
    password: '123456',
    role: 'admin',
    moviesLiked: ['movie1', 'movie2'],
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe('create a user', () => {
  it('should return an error if the username already exists', async () => {
    const mockRequest = {
      body: {
        username: 'riniTest',
        password: '123456',
        role: 'admin',
        moviesLiked: ['movie1', 'movie2'],
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createUser(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(409);
    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'Username already exists',
      })
    );
  });

  it('should create a user', async () => {
    const mockRequest = {
      body: {
        username: 'newUser',
        password: '123456',
        role: 'user',
        moviesLiked: ['movie3', 'movie4'],
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createUser(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.objectContaining({
        username: 'newUser',
        role: 'user',
        moviesLiked: ['movie3', 'movie4'],
      })
    );
  });
});


















// describe('User Model', () => {
//   it('should see if a success returns a 200 code', async () => {
//     const mockRequest = {
//       body: {
//         username: 'riniBini',
//         password: '123456',
//         role: 'admin',
//         moviesLiked: ['movie1', 'movie2']
//       }
//     };    

//     const mockResponse = {
//       status: jest.fn().mockReturnThis(),  // To chain .json()
//       json: jest.fn()
//     };
    
//     await createUser(mockRequest, mockResponse);
    
//     expect(mockResponse.status).toHaveBeenCalledWith(200);
//   });

//   it('should create a user', async () => {
//     const mockRequest = {
//       body: {
//         username: 'riniBini',
//         password: '123456',
//         role: 'admin',
//         moviesLiked: ['movie1', 'movie2']
//       }
//     };

//     const mockResponse = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     };

//     await createUser(mockRequest, mockResponse);

//     expect(mockResponse.status).toHaveBeenCalledWith(200);
//     expect(mockResponse.json).toHaveBeenCalledWith(
//       expect.objectContaining({
//         user: expect.objectContaining({
//           username: 'riniBini',
//           password: '123456',
//           role: 'admin',
//           moviesLiked: ['movie1', 'movie2']
//         })
//       })
//     )

//   });
  
// });
