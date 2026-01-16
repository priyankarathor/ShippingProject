import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email } = body;

    const user = await User.create({ name, email });

    return new Response(
      JSON.stringify({ message: "User created", user }),
      { status: 201 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
