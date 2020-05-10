import mongoose from 'mongoose';

const { Schema } = mongoose;
const institutionSchema = new Schema({
  id: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('institution', institutionSchema);
