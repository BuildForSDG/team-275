import {User} from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthController {
  async registerUser(userModel) {
    let user = await User.findOne({email: userModel.email});
    if (user) {
      throw new Error("Email already exists!");
    }
    user = new User(userModel);
    user.password = await bcrypt.hash(user.password, 10);
    return user.save();
  }
  async postLogin(userModel) {
    let user = await User.findOne({ email: userModel.email });
    if (!user) {
      throw new Error("Incorrect email or password");
    }
    const isMatch = await bcrypt.compare(userModel.password, user.password);
    if (!isMatch) {
      throw new Error("Incorrect email or password");
    }
    const token = jwt.sign({id: user.id}, "1913155164FC4B4DA16CCEA62C6C98A6", {expiresIn: "2Hrs"});
    return { token: token };
  }
}
