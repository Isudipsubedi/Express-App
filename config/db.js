import dotenv from 'dotenv';
dotenv.config();

// npm install dotenv
import mongoose from "mongoose";

// use env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    await mongoose.connect(MONGODB_URI).then(() => {
        console.log('Database Connected')
    })
}