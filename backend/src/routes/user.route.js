import express from "express";
import { AuthController } from "../controllers/auth.controller.js";
import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
const config = require("config");
import {User} from "../models/user";

const router = express.Router();
router.post("/register", async (req, res) => {
    try {
        const auth = new AuthController();
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
// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
    "/login",
    [
      check("email", "Please include a valid email").isEmail(),
      check("password", "Password is required").exists()
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
  
      try {
        let user = await User.findOne({ email });
  
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
  
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
  
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    });
export const userRouter = router;
