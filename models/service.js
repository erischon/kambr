const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter room name"],
    trim: true,
    maxLength: [50, "Service name cannot exceed 50 characters"],
    unique: [true, "Service name must be unique"],
  },
  description: {
    type: String,
    required: [true, "Please enter room description"],
  },
  option: {
    type: Boolean,
    default: false,
  },
  optionPricing: {
    type: Number,
    default: 0,
  },
});

module.exports =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
