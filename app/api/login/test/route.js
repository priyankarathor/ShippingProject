import dbConnect from '../../../../lib/mongodb';

export async function GET(req) {
  await dbConnect(); // ✅ only runs when API is called
  return new Response(JSON.stringify({ message: 'Test OK' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
