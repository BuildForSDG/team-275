import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const approverSchema = new Schema({
  id: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('approver', approverSchema);
