import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const eduProviderSchema = new Schema({
  _userId: { type: Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Education_Provider', eduProviderSchema);
