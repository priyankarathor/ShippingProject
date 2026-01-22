import  connectDB from "../../../lib/mongodb";
import PackageDetails from "../../../models/PackageDetails";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const Package = await PackageDetails.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Package details saved successfully",
        data: Package
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Package POST error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save Package details",
        error: error.message
      },
      { status: 500 }
    );
  }
}
