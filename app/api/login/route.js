import connectDB from "../../../lib/mongodb";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  const MONGO_URL = process.env.MONGO_URL;
  if (!MONGO_URL) {
    return new NextResponse(
      "Server misconfiguration: MONGO_URL not configured",
      { status: 500 }
    );
  }

  try {
    const client = await connectDB(); // safe lazy connection
    const body = await req.json();
    const { name, email } = body;

    const user = await User.create({ name, email });

    return new NextResponse(JSON.stringify({ message: "User created", user }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
