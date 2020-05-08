import express from "express";
import { AuthController } from "../controllers/auth.controller.js";

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
router.post("/login", async (req, res) => { 
    try {
    const auth = new AuthController();
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    const doc = await auth.postLogin(user);
    return res.status(200).send(doc);
    } catch (e) {
        res.status(500).send({error: e.message });
    }
});
export const userRouter = router;
