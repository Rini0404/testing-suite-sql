const User = require('./User');
const { Feed } = require('./Feed');  
const PollOption = require('./PollOptions');
const Vote = require('./Vote');

User.hasMany(Feed, { foreignKey: 'userId', as: 'feeds' });
Feed.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Feed.hasMany(PollOption, { foreignKey: 'feedId', as: 'pollOptions' });
PollOption.belongsTo(Feed, { foreignKey: 'feedId' });

PollOption.hasMany(Vote, { foreignKey: 'pollOptionId', as: 'votes' });
Vote.belongsTo(PollOption, { foreignKey: 'pollOptionId' });

User.hasMany(Vote, { foreignKey: 'userId', as: 'votes' });
Vote.belongsTo(User, { foreignKey: 'userId' });
