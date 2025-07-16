const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    name: String,
    schedule: String,
    command: String,
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },
    dependencies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
    retryPolicy: { type: Number, default: 3 },
    status: {
      type: String,
      enum: ["Pending", "Running", "Success", "Failed"],
      default: "Pending",
    },
    attempts: { type: Number, default: 0 },
    nextRunTime: Date,
    workerId: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
