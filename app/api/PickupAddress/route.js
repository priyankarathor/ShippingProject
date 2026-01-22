import  connectDB from "../../../lib/mongodb";
import PickupAddress from "../../../models/PickupAddress";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const pickup = await PickupAddress.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Pickup Address details saved successfully",
        data: pickup
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Pickup Address POST error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save Pickup Address details",
        error: error.message
      },
      { status: 500 }
    );
  }
}
