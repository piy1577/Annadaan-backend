import express from "express";
import helmet from "helmet";
import cors from "cors";
import userRouter from "./routes/routers/User.Router.js";
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(
    cors({
        origin: "*",
    })
);

app.use(userRouter);

export default app;
