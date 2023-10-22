const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');

function formatDate(date){
  return dayjs(date).format('DD/MM/YYYY HH:mm:SSSS') // '25/01/2019'
}

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
      get: currentDate => formatDate(currentDate)
     
    },
    username: {
      type: String,
      required: true,
     
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
thoughtSchema.virtual('reactioncount').get(function(){
  return this.reactions.length
})
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
