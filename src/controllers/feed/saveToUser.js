
const { Feed } = require("../../models/Feed");
const User = require("../../models/Users");


exports.savePostToUser = async (feed) => {
  try {
    // Find user by PRIMARY KEY
    const user = await User.findByPk(feed.userId);

    if (!user) {
      return false;
    }

    // Create a new Feed entry and associate it with the user
    const newFeed = await Feed.create({
      content: feed.content,
      type: feed.type,
      userId: feed.userId,  // This associates the Feed with the User
      likes: feed.likes || 0,  // You can set defaults for likes, etc.
    });

    if (!newFeed) {
      return false;
    }

    return true;

  } catch (error) {
    console.log('error in savePostToUser: ', error);
    return false;
  }
};

exports.findFeedById = async (id) => {
  try {
  
    const feed = await Feed.findByPk(id);
  
    if (!feed) {
      return false;
    }

    console.log('feed: ', feed);

    return true;
  
  } catch (error) {
    console.log('error in findFeedById: ', error);
    return false;
  }
}
