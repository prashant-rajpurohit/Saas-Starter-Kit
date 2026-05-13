import mongoose from "mongoose";
import { env } from "./env";

const MONGODB_URI = env.MONGODB_URI!;
if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}
let cached =
  (global as any).mongoose ||
  ((global as any).mongoose = { conn: null, promise: null });
async function connectDB() {
  try {
    if (cached.conn) {
      await mongoose.connect(MONGODB_URI);
      console.log("MongoDB Connected");
    }
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI, {
        bufferCommands: false,
      });
    }

    cached.conn = await cached.promise;
    console.log("MongoDB Connected ✅");
    return cached.conn;

  } catch (error) {
    cached.promise = null;
    console.error("MongoDB Connection Failed");
    throw error;
  }

}

export default connectDB;
