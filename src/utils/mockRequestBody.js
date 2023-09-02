

exports.mockARequest = (body) => {
  
    const req = {
      body: body,
    }
  
    return req;
}

exports.mockAResponse = () => {
    
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      }
    
      return res;
  }