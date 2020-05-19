import mongoose from 'mongoose';

const { Schema } = mongoose;
const eduProviderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  profession: { type: String, required: true },
  experience: { type: String, required: true },
  physicalAddress: { type: String, required: true },
  postalAddress: { type: String },
  contactNumber: { type: String, required: true },
  bio: { type: String }
});
const educationSchema = new Schema({
  epId: { type: Schema.Types.ObjectId, ref: 'Education_Provider', required: true },
  institution: { type: String, required: true },
  course: { type: String, required: true },
  started: { type: Date, required: true },
  complete: { type: Date, required: true }
});
const workExperience = new Schema({
  epId: { type: Schema.Types.ObjectId, ref: 'Education_Provider', required: true },
  company: { type: String, required: true },
  position: { type: String, required: true },
  started: { type: Date, required: true },
  leftOn: { type: Date }
});
const EducationProvider = mongoose.model('Education_Provider', eduProviderSchema);
const Education = mongoose.model('Education', educationSchema);
const WorkExperience = mongoose.model('WorkExperience', workExperience);

export default { EducationProvider, Education, WorkExperience };
