const PollOptions = require('../../models/PollOptions');

exports.createAPoll = async (feedId, pollChoices) => {


  try {
    





  } catch (error) {
    console.log('error in createAPoll: ', error);
  }

}


// ? JSON example: 
// {
//   "content": "Who is the best football player?",
//   "type": "poll",
//   "userId": 1,
//   "options": [
//     {"text": "Messi"},
//     {"text": "CR7"},
//     {"text": "Neymar"}
//   ]
// }
