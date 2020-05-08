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
        return user.save();
    }
    async postLogin(req, res ) {
        const signInUser = {
            email: req.bod.email,
            password: req.body.password
        };
       await User.findOne({email: signInUser.email })
        .then(user => {
            if (!user) {
                return res.redirect("/login");
            }
            bcrypt.compare(signInUser.password, user.password)
            .then(doMatch => {
                if (doMatch) {
                    req.session.isLoggedIn = true;
                    req.session.user = user;
                   return req.session.save(err => {
                        console.log(err);
                        res.redirect("/"); //I'm not sure this is applicable for our monolith
                    });
                   
                }
                return res.redirect("/login");
            })
            .catch(err => {
                console.log(err);
                return res.redirect("/login");
            });
        })
        .catch(err => {throw new Error(err);});
}
}
