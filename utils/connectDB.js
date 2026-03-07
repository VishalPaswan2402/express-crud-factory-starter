import mongoose from "mongoose";

export async function connectDB(database_url) {
    try {
        await mongoose.connect(database_url);
        console.log("Connected to crud-test DB");
    } catch (err) {
        console.error("DB connection error:", err);
    }
}