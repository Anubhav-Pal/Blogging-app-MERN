import mongoose from "mongoose";
import 'dotenv/config'

async function ConnectToDB() {
    try {
        // console.log(process.env.DB_URL);
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected to database");
    } catch (error) {
        console.log("Database connection error: ", error);
    }
}

export default ConnectToDB;