const cron = require("node-cron");
const Job = require("../models/Job");
const { shouldRunJob } = require("../utils/cronHelper");
const { runJob } = require("../workers/worker");

const scheduleRunner = async () => {
  const jobs = await Job.find();
  jobs.forEach((job) => {
    if (shouldRunJob(job)) {
      runJob(job);
    }
  });
};

const startScheduler = () => {
  cron.schedule("* * * * *", () => {
    console.log("⏰ Checking scheduled jobs...");
    scheduleRunner();
  });
};

module.exports = startScheduler;
