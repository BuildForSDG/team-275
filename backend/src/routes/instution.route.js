import express from 'express';
import checkAuth from '../middleware/check-auth';
import InstitutionController from '../controllers/institution.controller';

const router = express.Router();
const institution = new InstitutionController();

router.post('/add', checkAuth, async (req, res) => {
  const user = { user: req.userData };
  const institutionObj = {
    name: req.body.name,
    established: req.body.established,
    country: req.body.country,
    state: req.body.state,
    website: req.body.website,
    bio: req.body.bio
  };
  try {
    const doc = await institution.addInstution(institutionObj, user.user.userId);
    res.send(doc);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
const institutionRoute = router;
export default institutionRoute;
