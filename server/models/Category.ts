const mongooseC = require('mongoose');

const CategorySchema = new mongooseC.Schema({
    name:{
        type: String,
        required:true
      },
    icon:{
        type: String
      },
    color:{
        type: String
      },
    image:{
        type: String
      },
});

CategorySchema.virtual('id').get(function () {
  return this._id.toHexString();
});

CategorySchema.set('toJSON', {
  virtuals: true
});

module.exports = mongooseC.model('Category', CategorySchema);