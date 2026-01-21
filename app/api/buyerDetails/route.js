import  connectDB from "../../../lib/mongodb";
import CustomerDetail from "../../../models/CustomerDetails";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const customer = await CustomerDetail.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Customer details saved successfully",
        data: customer
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Customer POST error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save customer details",
        error: error.message
      },
      { status: 500 }
    );
  }
}
