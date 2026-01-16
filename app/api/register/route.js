import connectDB from "../../../lib/mongodb";
import User from "../../../models/Register";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, companyName, phone } = body;

    // basic validation
    if (!name || !email || !companyName) {
      return new Response(
        JSON.stringify({ error: "All required fields missing" }),
        { status: 400 }
      );
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User already exists" }),
        { status: 409 }
      );
    }

    // create user
    const user = await User.create({
      name,
      email,
      companyName, // (plain for now)
      phone,
    });

    return new Response(
      JSON.stringify({ message: "User registered Successfully", user }),
      { status: 201 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
