import mongoose from "mongoose";

const CustomerDetailSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true   
    },
    customerEmail: String,
    customerMobile: String,
    customerAlternatePhone: String,
    customerAddressLine1: String,
    customerAddressLine2: String,
    customerCountry: String,
    customerAddressCity: String,
    customerAddressState: String,
    customerPincode: String,
    customerCurrency: String,
    companyName: String,
    gstin: String
  },
  { timestamps: true }
);

export default mongoose.models.CustomerDetail ||
  mongoose.model("CustomerDetail", CustomerDetailSchema);
