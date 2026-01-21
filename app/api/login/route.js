import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { name, mobilenumber } = await req.json();

    // Validation
    if (!name || !mobilenumber) {
      return NextResponse.json(
        { message: "Name and mobile number are required" },
        { status: 400 }
      );
    }

    // Check duplicate
    const existingUser = await User.findOne({ mobilenumber });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const user = await User.create({ name, mobilenumber });

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );

  } catch (error) {
    console.error("POST /api error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
