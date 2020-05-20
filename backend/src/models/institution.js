import mongoose from 'mongoose';

const { Schema } = mongoose;
const institutionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  established: { type: Number, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  website: { type: String, required: true },
  bio: { type: String, required: true }
});

const campusSchema = new Schema({
  institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', required: true },
  name: { type: String, required: true },
  physicalAddress: { type: String, required: true },
  postalAddress: { type: String, required: true },
  contactNumber: { type: String, required: true },
  shortBio: { type: String, required: true }
});
const Institution = mongoose.model('Institution', institutionSchema);
const Campus = mongoose.model('Campus', campusSchema);
export { Institution, Campus };
