const mongoose = require("mongoose");

const MembershipSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Membership name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
    features: {
      type: [String],
      required: [true, "Features are required"],
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Membership", MembershipSchema);
