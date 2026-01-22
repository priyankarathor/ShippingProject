import mongoose from "mongoose";

const PackageDetails = new mongoose.Schema(
  {
    customerId: String,
    DeadWeight: String,
    Dimensionslength: String, 
    Dimensionswidth: String,
    Dimensionsheight : String,
    VolumetricWeight: String,
    applicablewight: String
  },
  { timestamps: true }
);

export default mongoose.models.PackageDetails ||
  mongoose.model("PackageDetails", PackageDetails);
