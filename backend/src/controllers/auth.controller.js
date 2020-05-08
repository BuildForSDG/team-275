import { User } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthController {
    async registerUser(userModel) {
        let user = await User.findOne({ email: userModel.email });
        if (user) {
            throw new Error("Email already exists!");
        }
        user = new User(userModel);
        user.password = await bcrypt.hash(user.password, 10);
        return user.save();
    }
    async postLogin(res, req, userModel) {
            let user = await User.findOne({ email: userModel.email });
            if (!user) {
                return res
                  .status(400)
                  .json({ errors: [{ msg: 'Invalid Credentials' }] });
              }
              const isMatch = await bcrypt.compare(user.password, userModel.password);
              if (!isMatch) {
                return res
                  .status(400)
                  .json({ errors: [{ msg: 'Invalid Credentials' }] });
              }
              jwt.sign({email: user.email},
                "jwtSecret",
                { expiresIn: 360000 },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                }
              );
          }}
