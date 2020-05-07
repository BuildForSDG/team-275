import express from "express";
import {AuthController} from "../controllers/auth.controller";

const router = express.Router();
const auth = new AuthController();
router.post("/register", async (req, res) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            avatar: {type: String}
        };
        const _newUser = await auth.registerUser(user);
        res.json(_newUser);
    } catch (e) {
        res.send(e);
    }
});
export const userRouter = router;
