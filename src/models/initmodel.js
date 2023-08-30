const User = require('./User');
const { Feed } = require('./Feed');  // Adjust according to how you've exported

User.hasMany(Feed, { foreignKey: 'userId', as: 'feeds' });
Feed.belongsTo(User, { foreignKey: 'userId', as: 'user' });
