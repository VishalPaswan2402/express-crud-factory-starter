import express from "express";
import dotenv from 'dotenv';
import { loginSignupFactory, postArticleFactory } from "express-crud-factory";
import UserModel from "./models/userModel.js";
import PostModel from "./models/postModel.js";
import { jsonValidate } from "./middlewares/jsonValidate.js";
import { connectDB } from "./utils/connectDb.js";
dotenv.config();

const port = process.env.PORT || 8080;
const database_url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/testApi";

const app = express();
app.use(express.json());
app.use(jsonValidate);
connectDB(database_url);

const userAPI = loginSignupFactory(UserModel);
const postAPI = postArticleFactory(UserModel, PostModel);

app.use("/user", userAPI);
app.use("/user/post", postAPI);

app.listen(port, () => {
    console.log("Server running on port", port);
});
