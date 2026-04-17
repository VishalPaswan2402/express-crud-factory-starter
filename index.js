import express from "express";
import dotenv from 'dotenv';
import { loginSignupFactory, postArticleFactory, jsonErrorHandler, connectDatabase } from "express-crud-factory";
import UserModel from "./models/user.model.js";
import PostModel from "./models/post.model.js";
import cors from "cors";

const app = express();
dotenv.config();

const backend_port = process.env.PORT || 8080;
const frontend_base_url = process.env.FRONTEND_BASE_URL || `http://localhost:${backend_port}`;
const database_url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/expressDatabase";

app.use(cors({ origin: frontend_base_url }));
app.use(express.json());
app.use(jsonErrorHandler);
await connectDatabase(database_url);

// jwt secret and hashing configuration
const secretsConfig = {
    jwtSecret: {
        secretKey: process.env.JWT_SECRET_KEY || "a-string-secret-at-least-256-bits-long", // secret key for jwt signature
        expireInDays: 1  // token expire in days
    },
    bcryptSecret: {
        saltRounds: 10 // hashing salt round
    }
}

// email and verify method configuration
const emailConfig = {
    mailProvider: {
        host: "smtp.ethereal.email", // your email host provider
        secure: false, // assign true value in production
        username: process.env.EMAIL_USERNAME || "your_email_username", // your email username
        password: process.env.EMAIL_PASSWORD || "your_email_password" // your email password
    },
    verifyMethod: {
        projectName: process.env.PROJECT_NAME || "Express-Crud-Factory", // your project name
        otpLinkExpiryMinutes: 2, // otp expires in minutes
        unverifiedUserExpiryDays: 1, // user deleted if email is not verified in days
        usingLink: true, // true -> link verification method and false -> OTP verification method
        verifySecretKey: process.env.VERIFY_SECRET_KEY || "a-string-secret-at-least-256-bits-long", // ( use if usingLink = true else optional) secret key for email signature
        frontendBaseUrl: frontend_base_url // ( use if usinglink = true  else optional)
    }
}

const userAPI = loginSignupFactory(UserModel, secretsConfig, emailConfig);
const postAPI = postArticleFactory(UserModel, PostModel, secretsConfig);

app.use("/user", userAPI);
app.use("/user/post", postAPI);

app.listen(backend_port, () => {
    console.log("Server is running on port", backend_port);
});
