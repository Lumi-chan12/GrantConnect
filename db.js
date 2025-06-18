const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb+srv://santoshihajare20:<tOTd18CDebVlmPio>@grantconnect.z5gpkub.mongodb.net/?retryWrites=true&w=majority&appName=GrantConnect", {
  tls: true,
  tlsAllowInvalidCertificates: false,
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 30000,
});
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("grantbridge");
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("MongoDB Error:", err);
  }
}

function getDB() {
  return db;
}

module.exports = { connectDB, getDB };
