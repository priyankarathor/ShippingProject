import connectDB from "../../../lib/mongodb";
import User from "../../../models/Register";
import { NextResponse } from "next/server";

export async function POST(req) {
  const MONGO_URL = process.env.MONGO_URL;
  if (!MONGO_URL) {
    return new NextResponse(
      "Server misconfiguration: MONGO_URL not configured",
      { status: 500 }// aall detaaills and the data inserted 
    );
  }

  try {
    // Lazy DB connection
    await connectDB();

    const body = await req.json();
    const { name, email, phoneNumber, companyName, pincode } = body;

    // Basic validation
    if (!name || !email || !phoneNumber) {
      return new NextResponse(
        JSON.stringify({ error: "All required fields missing" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ error: "User already exists" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create user
    const user = await User.create({
      name, email, phoneNumber, companyName, pincode
    });

    return new NextResponse(
      JSON.stringify({ message: "User registered successfully", user }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
