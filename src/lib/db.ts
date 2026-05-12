import mongoose from "mongoose";

async function connectDB() {
  try {
      console.log("URI VALUE:", process.env.MONGODB_URI);
    const MONGODB_URI = process.env.MONGODB_URI!;
    
    if (!MONGODB_URI) {
      throw new Error("Please define MONGODB_URI in .env.local");
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI);
      console.log("MongoDB Connected");
    }
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    throw error;
  }
}

export default connectDB;