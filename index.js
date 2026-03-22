import express from "express";
import dotenv from 'dotenv';
import { loginSignupFactory, postArticleFactory, jsonErrorHandler, connectDatabase } from "express-crud-factory";
import UserModel from "./models/userModel.js";
import PostModel from "./models/postModel.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;
const database_url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/testApi";

app.use(express.json());
app.use(jsonErrorHandler);
connectDatabase(database_url);

const secretsConfig = {
    jwtSecret: {
        secretKey: process.env.JWT_SECRET || "Your_Secret_Key_For_Jwt",
        expireIn: "1d"
    },
    bcryptSecret: {
        saltRounds: 10
    }
};

const userAPI = loginSignupFactory(UserModel, secretsConfig);
const postAPI = postArticleFactory(UserModel, PostModel, secretsConfig);

app.use("/user", userAPI);
app.use("/user/post", postAPI);

app.listen(port, () => {
    console.log("Server is running on port", port);
});
