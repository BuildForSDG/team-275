import mongoose from 'mongoose';

const { Schema } = mongoose;
const applicationSchema = new Schema({
  applicationNum: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('application', applicationSchema);
