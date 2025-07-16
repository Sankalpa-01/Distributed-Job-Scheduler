import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="bg-green-900 text-green-100 p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{job.name}</h3>
      <p>
        Status: <span className="text-green-400">{job.status}</span>
      </p>
      <p>Priority: {job.priority}</p>
      <p>
        Worker:{" "}
        <span className="text-green-400">
          {job.workerId ? job.workerId : "Not Assigned"}
        </span>
      </p>
      <Link
        to={`/jobs/${job._id}`}
        className="text-green-300 hover:text-white underline"
      >
        View
      </Link>
    </div>
  );
}
