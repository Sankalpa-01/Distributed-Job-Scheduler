import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await getJobs();
      setJobs(res);
    };
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-300 p-6">
      <h1 className="text-4xl font-bold text-green-400 mb-8 text-center">
        All Jobs
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-green-950 border border-green-600 p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-green-200 mb-1">
              {job.name}
            </h2>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={
                  job.status === "Success"
                    ? "text-green-400"
                    : job.status === "Failed"
                    ? "text-red-400"
                    : "text-yellow-300"
                }
              >
                {job.status}
              </span>
            </p>
            <p>
              <span className="font-semibold">Priority:</span> {job.priority}
            </p>
            <Link
              to={`/jobs/${job._id}`}
              className="text-green-400 underline hover:text-green-500 mt-2 inline-block"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
