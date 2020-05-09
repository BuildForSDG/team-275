import express from "express";
import {AuthController} from "../controllers/auth.controller.js";

const router = express.Router();
const auth = new AuthController();
router.post("/register", async (req, res) => {
  try {
    const user = {
      name: req.body.name,
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
    res.send(token);
  } catch (e) {
    res.status(400).send({error: e.message});
  }
});
export const userRouter = router;
