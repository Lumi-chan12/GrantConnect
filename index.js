import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js"; // ✅ Keep only this
import firebaseApp from "./firebase.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("GrantConnect Backend is live ✨");
});

// Grant Finder endpoint
app.post("/api/grant-finder", async (req, res) => {
  const { category, location } = req.body;

  // Replace with MongoDB logic later
  return res.json({
    match: `Found 3 experts in ${location} for ${category}`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
