import mongoose from 'mongoose';

const checkObjectId = (idToCheck) => (res, next) => {
  if (!mongoose.Types.ObjectId.isValid(idToCheck)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
  next();
  return 1;
};
export default checkObjectId;
