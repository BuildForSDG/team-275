import express from 'express';
import AuthController from '../controllers/auth.controller';

const router = express.Router();
const auth = new AuthController();
router.post('/register', async (req, res) => {
  try {
    const user = {
      registeras: req.body.registeras,
      email: req.body.email,
      password: req.body.password
    };
    const doc = await auth.registerUser(user);
    res.send(doc);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
router.post('/login', async (req, res) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password
    };
    const token = await auth.postLogin(user);
   // req.session['currentUser'] = user;
    res.send(token);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.post('/reset-password', async (req, res) => {
  try {
    await auth.resetPassword(req.body);
    res.send({ success: true, message: 'Password reset successful' });
  } catch (ex) {
    res.status(400).send({ error: ex.message });
  }
});
const userRouter = router;
export default userRouter;
