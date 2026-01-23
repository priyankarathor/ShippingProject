import connectDB from "../../../../lib/mongodb";
import OrderDetail  from "../../../../models/OrderDetails";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(_, { params }) {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return NextResponse.json(
      { success: false, message: "Invalid ID format" },
      { status: 400 }
    );
  }

  const order = await OrderDetail.findById(params.id);

  if (!order)
    return NextResponse.json(
      { success: false, message: "Not found" },
      { status: 404 }
    );

  return NextResponse.json({ success: true, data: order });
}

export async function PUT(request, { params }) {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return NextResponse.json(
      { success: false, message: "Invalid ID format" },
      { status: 400 }
    );
  }

  const body = await request.json();

  const updated = await OrderDetail.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );

  if (!updated)
    return NextResponse.json(
      { success: false, message: "Not found" },
      { status: 404 }
    );

  return NextResponse.json({ success: true, data: updated });
}

export async function DELETE(_, { params }) {
  await connectDB();

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return NextResponse.json(
      { success: false, message: "Invalid ID format" },
      { status: 400 }
    );
  }

  const deleted = await OrderDetail.findByIdAndDelete(params.id);

  if (!deleted)
    return NextResponse.json(
      { success: false, message: "Not found" },
      { status: 404 }
    );

  return NextResponse.json({
    success: true,
    message: "Deleted successfully"
  });
}
