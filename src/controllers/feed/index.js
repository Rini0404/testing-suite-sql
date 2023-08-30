const { Feed } = require("../../models/Feed");
const { savePostToUser } = require("./saveToUser");


exports.createAPost = async (req, res) => {

  try {

    if(!req.body.content || !req.body.userId) {
      return res.status(400).json({
        message: 'You must provide content and a user id'
      });
    }

    const feedObject = {
      content: req.body.content,
      type: req.body.type,
      userId: req.body.userId,
    }

    console.log('feedObject: ', feedObject);

    const newFeed = await Feed.create(feedObject);

    // const savedPostToUser = await savePostToUser(newFeed.id, newFeed.userId);

    // if(!savedPostToUser) {
    //   return res.status(500).json({
    //     message: 'Something went wrong'
    //   });
    // }

    return res.status(200).json({
      feed: newFeed,
      // didSaveToUser: savedPostToUser
    });
    
  } catch (error) {
    console.log('error in createFeed: ', error);
    res.status(500).json({
      message: 'Something went wrong'
    })

  }

}

