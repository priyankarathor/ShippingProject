// app/api/login/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {
  const MONGO_URL = process.env.MONGO_URL;
  if (!MONGO_URL) {
    return new NextResponse('Server misconfiguration: MONGO_URL not configured', { status: 500 });
  }

  // Lazy import of MongoClient to avoid top-level execution
  const { MongoClient } = await import('mongodb');

  const client = new MongoClient(MONGO_URL);
  await client.connect();
  const db = client.db(); // optional: specify db name if needed

  // Just a test response
  return NextResponse.json({ message: 'Test OK mongodb' });
}
