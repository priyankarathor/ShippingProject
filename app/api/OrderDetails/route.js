import  connectDB from "../../../lib/mongodb";
import OrderDetail from "../../../models/OrderDetails";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const Order = await OrderDetail.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Order details saved successfully",
        data: Order
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Order POST error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save Order details",
        error: error.message
      },
      { status: 500 }
    );
  }
}
