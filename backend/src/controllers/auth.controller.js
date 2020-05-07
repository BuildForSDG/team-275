import {User} from "../models/user";
import bcrypt from "bcrypt";

export class AuthController {
    async registerUser(userModel) {
        console.log("May name ");
        let user = await User.findOne({email: userModel.email});
        if (user) {
            throw new Error("Email already exists!");
        }
        user = new User(userModel);
        console.log(user);
        user.password = await bcrypt.hash(user.password, 10);
        return user.save().exec();
    }
}
