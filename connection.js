import { MongoClient } from "mongodb";
import "dotenv/config"

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
let db = null;

export async function connectDB() {
  try {
    await client.connect();
    db = client.db("myApp");
    console.log("MongoDB connected");
  } 
  catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

export function getDB() {
  if (!db) 
    throw new Error("Database not connected");
  return db;
}
