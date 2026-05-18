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
    }
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI, {
        bufferCommands: false,
      });
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}

export default connectDB;
