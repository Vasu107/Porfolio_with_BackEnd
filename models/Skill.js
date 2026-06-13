const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["frontend", "backend", "database", "devops", "other"],
      lowercase: true,
      trim: true,
      default: "other",
    },
    proficiency: {
      type: Number,
      min: 1,
      max: 100,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
