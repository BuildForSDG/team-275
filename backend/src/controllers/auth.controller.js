import {User} from "../models/user";
import bcrypt from "bcrypt";

export class AuthController {
    async registerUser(userModel) {
        let user = await User.findOne({email: userModel.email});
        if (user) {
            throw new Error("Email already exists!");
        }
        user = new User(userModel);
        user.password = await bcrypt.hash(user.password, 10);
        return User.create();
    }
}
