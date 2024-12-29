import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connection', () => {
            console.log("mongo dbconnected");
        })
        connection.on('error', (err) => {
            console.log("mongodb connection error:", err);
            process.exit();
        })



    } catch (err) {
        console.log(err);
    }
}