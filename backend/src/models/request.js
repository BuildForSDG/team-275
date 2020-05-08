import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const requestSchema = new Schema({
  id: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('request', requestSchema);
