const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  condition: {
    type: String,
    enum: ["NEW", "OLD", "ROUGH"],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  mode: {
    type: String,
    enum: ["ONLINE", "OFFLINE"],
    required: true
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  isSold: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
