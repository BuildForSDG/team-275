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
    postLogin(res, req) {
        User.findOne({ email: req.body.email })
            .then((doc) => {
                if (doc) {
                    if (doc.isValid(req.body.email)) {
                        let token = jwt.sign({ email: doc.email }, "secret", { expiresIn: "3h" });
                        return res.status(200).json(token);
                    }
                } else {
                    return res.status(501).json({ message: "User does not exist!" });
                }
            })
            .catch(err => { throw new Error(err); });
    }
}
