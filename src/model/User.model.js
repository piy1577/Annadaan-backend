import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "inValid Email"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
});

export default mongoose.model("user", userSchema);
