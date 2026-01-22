import mongoose from "mongoose";

const PickupAddressDetailSchema = new mongoose.Schema(
  {
    fulladdress: {
      type: String,
      required: true   
    },
    customerId:String,
    landmark: String,
    house: String,
    homestreet: String, 
    officename: String,
    workstreet: String,
    warehousename: String,
    warehousestreet: String,
    description: String,
    otherstreet: String,
    form: String,
    to: String,
    RTOadress: String,
    suppliername:String
  },
  { timestamps: true }
);

export default mongoose.models.pickupAddress ||
  mongoose.model("pickupAddress", PickupAddressDetailSchema);
