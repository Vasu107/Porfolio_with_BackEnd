const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    fieldOfStudy: {
      type: String,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    current: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    logo: {
      type: String,
    },
    marks:{
        type:Number,
        required:true,
        default:null

    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Education", educationSchema);
