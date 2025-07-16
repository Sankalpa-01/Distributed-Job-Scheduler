const Job = require("../models/Job");

// Simulated list of workers
const workers = ["Worker-A", "Worker-B", "Worker-C"];

const runJob = async (job) => {
  const deps = await Job.find({ _id: { $in: job.dependencies } });
  const allDepsDone = deps.every((d) => d.status === "Success");

  if (!allDepsDone || job.status === "Running") return;

  // Randomly assign a worker
  const assignedWorker = workers[Math.floor(Math.random() * workers.length)];

  console.log(`🚀 ${assignedWorker} is running job: ${job.name}`);

  try {
    job.status = "Running";
    job.workerId = assignedWorker;
    await job.save();

    // Simulated execution time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    job.status = "Success";
    await job.save();

    console.log(`✅ Job completed: ${job.name} by ${assignedWorker}`);
  } catch (err) {
    job.attempts++;
    job.status = job.attempts >= job.retryPolicy ? "Failed" : "Pending";
    await job.save();

    console.error(`❌ Job failed: ${job.name}, attempt ${job.attempts}`);
  }
};

module.exports = { runJob };
