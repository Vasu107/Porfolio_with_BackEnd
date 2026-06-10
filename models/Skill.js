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
      default: "other",
    },
    proficiency: {
      type: Number,
      min: 1,
      max: 100,
    },
    icon: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
