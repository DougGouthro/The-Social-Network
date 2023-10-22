const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');

function formatDate(date){
  return dayjs(date).format('DD/MM/YYYY HH:mm:SSSS') // '25/01/2019'
}

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionbody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      
    },
    username: {
      type: String,
      required: true,
     
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
      get: currentDate => formatDate(currentDate)
     
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
