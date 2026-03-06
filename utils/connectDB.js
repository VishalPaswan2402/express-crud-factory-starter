import mongoose from "mongoose";

const db_url =  process.env.DATABASE_URL ||"mongodb://127.0.0.1:27017/test";

export async function connectDB() {
    try {
        await mongoose.connect(db_url);
        console.log("Connected to crud-test DB");
    } catch (err) {
        console.error("DB connection error:", err);
    }
}