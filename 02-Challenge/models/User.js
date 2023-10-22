const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique:true,
      trimmed: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match:[/+.@+.\.+./,"Please enter valid email address"]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref:'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
  
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;
