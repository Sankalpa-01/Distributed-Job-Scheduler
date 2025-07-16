const parser = require("cron-parser");

exports.shouldRunJob = (job) => {
  if (!job.schedule || job.status === "Running") return false;

  try {
    const interval = parser.parseExpression(job.schedule);
    const next = interval.next().toDate();
    return new Date() >= next;
  } catch (err) {
    console.error("Invalid cron format:", err.message);
    return false;
  }
};
