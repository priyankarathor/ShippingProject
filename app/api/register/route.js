import connectDB from "../../../lib/mongodb";
import User from "../../../models/Register";

/* ================= CORS HANDLER ================= */
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

/* ================= REGISTER API ================= */
export async function POST(req) {
  try {
    // Connect DB
    await connectDB();

    const body = await req.json();
    const { name, email, phoneNumber, companyName, pincode } = body;

    // Validation
    if (!name || !email || !phoneNumber) {
      return new Response(
        JSON.stringify({ error: "All required fields are mandatory" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User already exists" }),
        {
          status: 409,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      phoneNumber,
      companyName,
      pincode,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "User registered successfully",
        user,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
