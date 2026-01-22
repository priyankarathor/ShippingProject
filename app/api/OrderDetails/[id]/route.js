import connectDB from "../../../../lib/mongodb";
import Order from "../../../../models/OrderDetails";
import { NextResponse } from "next/server";


export async function GET(_, { params }) {
  await connectDB();
  const order = await Order.findById(params.id);
  return NextResponse.json({ success: true, data: order });
}

export async function PUT(request, { params }) {
  await connectDB();
  const body = await request.json();
  const updated = await Order.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json({ success: true, data: updated });
}

export async function DELETE(_, { params }) {
  await connectDB();
  await Order.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true, message: "Deleted" });
}
