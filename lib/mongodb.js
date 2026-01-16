// lib/mongodb.js
import { MongoClient } from "mongodb";

let client;
let clientPromise;

export default async function connectDB() {
  const uri = process.env.MONGO_URL;
  if (!uri) {
    throw new Error("MONGO_URL not configured");
  }

  if (!client) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  await clientPromise;
  return client;
}
