import http from "http";
import dotenv from "dotenv";
import app from "./src/app.js";
import mongoose from "mongoose";
dotenv.config();

const PORT = process.env.PORT || 8000;
const uri = process.env.MONGO_URL.replace(
    "<password>",
    process.env.MONGO_PASSWORD
);

const server = http.createServer(app);

mongoose.connection.once("open", () => {
    console.log("DB connected");
});

mongoose.connection.on("error", (err) => {
    console.log(err);
});

mongoose.connect(uri).then(() => {
    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    });
});
