import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import user from "#routes/user.js";
import ErrorHandler from "#middleware/error.js";
import { generateResponse } from "#controller/chat.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//Added part
// app.use(bodyParser.json());
app.post("/generate", generateResponse);

//ends here

if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config();
}

app.use("/api/v1", user);

app.use(ErrorHandler);

export default app;
