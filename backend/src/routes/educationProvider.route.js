import express from 'express';
import { checkAuth } from '../middleware/check-auth';
import EducationProviderController from './../controllers/education-provider.controller';

const router = express.Router();
const ep = new EducationProviderController();

router.post('/add', checkAuth, async (req, res, next) => {
  const user = { user: req.userData };
  const eduProvider = {
    fullName: req.body.fullName,
    dateOfBirth: req.body.dateOfBirth,
    country: req.body.country,
    state: req.body.state,
    profession: req.body.profession,
    experience: req.body.experience,
    physicalAddress: req.body.physicalAddress,
    postalAddress: req.body.postalAddress,
    contactNumber: req.body.contactNumber,
    bio: req.body.bio
  };
  try {
    const doc = await ep.addEducationProvider(eduProvider, user.user.userId);
   
    res.json(doc);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }


});

const educationProviderRoute = router;
export default educationProviderRoute;