import mongoose from "mongoose";
import validator from "validator";

const ngoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "inValid Email"],
    },
    phoneNumber: {
        type: Number,
        required: [true, "Phone number is required"],
    },
    address: {
        type: String,
        requird: [true, "Address is required"],
    },
    state: {
        type: String,
        required: [true, "State is compulsory"],
    },
    images: {
        type: [String],
    },
});

export default mongoose.model("ngo", ngoSchema);
