import connectDB from "../../../lib/mongodb";
import OrderDetail  from "../../../models/OrderDetails";
import { NextResponse } from "next/server";


export async function GET() {
  await connectDB();
  const orders = await OrderDetail.find().sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: orders });
}

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const order = await OrderDetail.create(body);
  return NextResponse.json({ success: true, data: order }, { status: 201 });
}
