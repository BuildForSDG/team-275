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
// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post("/login", (req, res) => { 
    const auth = new AuthController();
    return auth.postLogin(req, res);
});
export const userRouter = router;
