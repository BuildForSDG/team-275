import express from "express";
import {AuthController} from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/register", async (req, res, next) => {
    try {
        const auth = new AuthController();
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };
        const _newUser = await auth.registerUser(user);
        res.send(_newUser);
    } catch (e) {
        res.status(400).send({error: e.message});
    }
});
export const userRouter = router;
