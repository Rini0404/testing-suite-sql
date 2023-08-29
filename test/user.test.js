import { createUser } from '../src/controllers/user';
import sequelize from '../src/db';

// initialize the mock db
beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});


describe('User Model', () => {
  it('should see if a success returns a 200 code', async () => {
    const mockRequest = {
      body: {
        username: 'riniBini',
        password: '123456',
        role: 'admin',
        moviesLiked: ['movie1', 'movie2']
      }
    };    
    //json:: This sets up a property on the mock res object to mimic the real res.json method.
    // jest.fn(): This creates a new mock function to replace the res.json method.

    const mockResponse = {
      status: jest.fn().mockReturnThis(),  // To chain .json()
      json: jest.fn()
    };
    
    await createUser(mockRequest, mockResponse);
    
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });

  it('should create a user', async () => {
    const mockRequest = {
      body: {
        username: 'riniBini',
        password: '123456',
        role: 'admin',
        moviesLiked: ['movie1', 'movie2']
      }
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await createUser(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      user: {
        username: mockRequest.body.username,
        password:  mockRequest.body.password,
        role: mockRequest.body.role,
        moviesLiked:  mockRequest.body.moviesLiked
      }
    }
    );

  });
  
});
