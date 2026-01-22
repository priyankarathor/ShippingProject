import mongoose from "mongoose";

const OrderDetails = new mongoose.Schema(
  {
    customerId: String,
    orderId: String,
    orderId: String, 
    orderchannel: String,
    Commodity : String,
    MEISapplicable: String,
    IGSTPaymentStatus: String,
    INCOTerms: String,
    productname : String,
    sku: String,
    price: String,
    quantity: String,
    hsncode:String,
    hsndescription:String,
    productcategory:String,
    tax:String,
    discount:String,
    prepaid:String,
    cod:String,
    giftfee:String,
    shippingfee:String,
    transactionfee:String,
    subtotal:String,
    othercharges:String,
    tax:String,
    discount:String,
    totalamt:String
  },
  { timestamps: true }
);

export default mongoose.models.OrderDetails ||
  mongoose.model("OrderDetails", OrderDetails);
