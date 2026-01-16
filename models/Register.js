import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    companyName: {
      type: String,
      required: true,
      minlength: 6,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Register ||
  mongoose.model("Register", registerSchema);
