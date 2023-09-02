const User = require("../../models/Users");

// Helper function to check if a user exists
const userExists = async (username) => {
  try {
    const existingUser = await User.findOne({
      where: {
        username: username,
      },
    });
    return !!existingUser;
  } catch (error) {
    throw new Error('Error in checking user existence');
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, password, role, moviesLiked } = req.body;

    if (await userExists(username)) {
      return res.status(409).json({ message: 'Username already exists' }); // 409 Conflict
    }

    // Create the user
    const newUser = await User.create({
      username,
      password,
      role,
      moviesLiked
    });

    return res.status(201).json(newUser); // 201 Created

  } catch (error) {
    console.log('error in createUser: ', error);
    return res.status(500).json({ message: 'Internal Server Error' }); // 500 Internal Server Error
  }
};
