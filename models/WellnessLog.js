const mongoose = require("mongoose");

const wellnessLogSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  steps: {
    type: Number,
    default: 0
  },
  sleepHours: {
    type: Number,
    default: 0
  },
  mood: {
    type: String,
    enum: ["happy", "neutral", "sad", "stressed", "angry"],
    default: "neutral"
  },
  notes: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("WellnessLog", wellnessLogSchema);
