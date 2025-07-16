import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../services/jobService.jsx";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobById(id).then(setJob);
  }, [id]);

  if (!job) return <p className="text-green-400">Loading...</p>;

  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-extrabold text-green-400">{job.name}</h2>
      <p>
        <strong>Status:</strong> {job.status}
      </p>
      <p>
        <strong>Schedule:</strong> {job.schedule}
      </p>
      <p>
        <strong>Command:</strong> {job.command}
      </p>
      <p>
        <strong>Priority:</strong> {job.priority}
      </p>
      <p>
        <strong>Retry Policy:</strong> {job.retryPolicy}
      </p>
      <p>
        <strong>Dependencies:</strong>{" "}
        {job.dependencies.map((dep) => dep._id).join(", ") || "None"}
      </p>
    </div>
  );
}
