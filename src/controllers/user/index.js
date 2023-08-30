const User = require("../../models/Users");




exports.createUser = async (req, res) => {

  try {


    const userObject = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      moviesLiked: req.body.moviesLiked
    }

    const newUser = await User.create(userObject);
    
    console.log('newUser: ', newUser)

    return res.status(200).json({
      user: newUser
    });
  } catch (error) {
    console.log('error in createUser: ', error);
  }


}