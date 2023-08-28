const User = require("../../models/Users");




exports.createUser = async (req, res) => {

  try {


    const userObject = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      moviesLiked: req.body.moviesLiked
    }

    console.log('userObject: ', userObject);


    return res.status(200).json({
      user: userObject
    });
  } catch (error) {
    console.log('error in createUser: ', error);
  }


}