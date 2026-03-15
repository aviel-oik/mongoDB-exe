import express from "express";
import cors from "cors";
import { connectDB, getDB } from "./connection.js"; //

const app = express();
await connectDB(); //

app.use(express.json());
app.use(cors());

app.post("/data", async (req, res) => {
    try {
        const db = getDB(); //
        const usersCollection = db.collection("users");
        const result = await usersCollection.insertOne(req.body);
        res.status(201).json({ message: "Data inserted", id: result.insertedId });
    }
    catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(8000, () => {
    console.log("running...")
});