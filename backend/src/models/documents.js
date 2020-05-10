import mongoose from 'mongoose';

const { Schema } = mongoose;
const docxSchema = new Schema({
  docxNum: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('documents', docxSchema);
