
import { createAPost } from ".";
import sequelize from "../../db";
import User from "../../models/Users";
import { findFeedById, savePostToUser } from "./saveToUser";


beforeAll(async () => {
  await sequelize.sync({ force: true });
  await User.create({
    id: 1,
    username: 'testJest',
    role: 'admin',
    password: '123456',
    moviesLiked: ['movie1', 'movie212']
  });
  console.log('User created')
});

afterAll(async () => {
  await sequelize.close();
});


describe('createAPost', () => {

  it('should allow you to create a post type for a feed and return a 200 if succesfully created', async () => {

    const mockRequest = {
      body: {
        content: 'This is a post',
        type: 'post',
        userId: 1,
      }
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await createAPost(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    // ! You can do this expectation but it will STRICTLY check for the object you pass in. Otherwise you can expect an object that contains the object you pass in.
    // expect(mockResponse.json).toHaveBeenCalledWith({...})

    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.objectContaining({
        feed: expect.objectContaining({
          content: 'This is a post',
          type: 'post',
          userId: 1,
          id: 1,
          likes: 0,
          // Now the test will pass even if the object has other properties like "createdAt", "updatedAt", etc.
        })
      })
    );
    


  });


  it('should fail if you are missing content or a user id', async () => {
      
    const mockRequest = {
      body: {
        content: '',
        type: 'post',
        userId: 1,
      }
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await createAPost(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'You must provide content and a user id'
    })
  });
  
  // write function to save to a user


});


describe('savePostToUser', () => { 

  it('should return true if the data is saved to a user. ', async () => {

    const feed = {
      content: 'This is a post',
      type: 'post',
      userId: 1,
      id: 1,
      likes: 0,
    };


    const savingFunction = await savePostToUser(feed);

    expect(savingFunction).toEqual(true);

    
  });
  


})


describe('findFeedById', () => {
  
    it('should return a feed if it exists', async () => {
  
      const feed = await findFeedById(1);
  
      
      expect(feed).toEqual(true)
    });
  
    it('should return false if the feed does not exist', async () => {
  
      const feed = await findFeedById(20);
  
      expect(feed).toEqual(false);
  
    });
  
  });