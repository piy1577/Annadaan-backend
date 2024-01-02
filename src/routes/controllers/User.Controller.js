import { states } from "../../data/state.js";
import userModel from "../../model/User.model.js";
import bcrypt from "bcrypt";

export const getStates = async (req, res) => {
    res.status(200).json(states);
};

export const signIn = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        const user = await userModel.create({ name, email, password: hash });
        if (user) {
            user.password = null;
            res.status(200).json({ success: true, user });
        } else {
            res.status(400).json({
                success: false,
                message: "Something went wrong",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (await bcrypt.compare(password, user.password)) {
            user.password = null;
            res.status(200).json({ success: true, user });
        } else {
            res.status(401).json({
                success: false,
                error: "invalid password",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(401).json({ success: false, error: err });
    }
};
