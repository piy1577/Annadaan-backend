import ngoModel from "../../model/Ngo.model.js";

export const register = async (req, res) => {
    const { name, email, phoneNumber, address, state, images } = req.body;
    try {
        const ngo = await ngoModel.create({
            name,
            email,
            phoneNumber,
            address,
            state,
            images,
        });
        if (ngo) {
            res.status(200).json({ success: true, ngo });
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

export const getNgo = async (req, res) => {
    const { state } = req.body;
    try {
        const ngo = await ngoModel.find({ state });
        res.status(200).json({ success: false, ngo });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

export const ngoId = async (req, res) => {
    const { id } = req.params;
    try {
        const ngo = await ngoModel.findById(id);
        if (ngo) {
            res.status(200).json({ success: true, ngo });
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
