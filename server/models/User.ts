const mongooseU = require('mongoose');

const UserSchema = new mongooseU.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  passwordHash:{
    type:String,
    required:true
  },
  isAdmin:{
    type: Boolean,
    default: false
  },
});

UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
  });
  
  UserSchema.set('toJSON', {
    virtuals: true
  });

module.exports = mongooseU.model('User', UserSchema);