const mongooseTm = require('mongoose');

const TaskSchema = new mongooseTm.Schema({
  name:{
    type: String,
    required:true
  },
  description:{
    type: String,
  },
  image:{
    type: String,
    default:''
  },
  category:{
    type: mongooseTm.Schema.Types.ObjectId,
    default:'Category', // here it is import from Category model
    required:true
  },
  dateCreated:{
    type: Date,
    default: Date.now
  },
});

TaskSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

TaskSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongooseTm.model('Task', TaskSchema);