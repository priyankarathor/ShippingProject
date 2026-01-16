import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return new Response("MongoDB Connected ✅");
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
