import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobById } from "../services/jobService";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const data = await getJobById(id);
      setJob(data);
    };
    fetchJob();
  }, [id]);

  if (!job)
    return <div className="text-green-300 text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-green-100 px-6 py-12 flex justify-center items-start">
      <div className="max-w-3xl w-full bg-green-900/30 border border-green-600 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-green-400 mb-6 border-b border-green-700 pb-4">
          🗂️ {job.name}
        </h1>

        <div className="space-y-4 text-lg">
          <p>
            <span className="font-semibold text-green-300">📌 Status:</span>{" "}
            <span className="text-green-200">{job.status}</span>
          </p>
          <p>
            <span className="font-semibold text-green-300">⏱️ Schedule:</span>{" "}
            <span className="text-green-200">{job.schedule}</span>
          </p>
          <p>
            <span className="font-semibold text-green-300">🔧 Command:</span>{" "}
            <span className="text-green-200">{job.command}</span>
          </p>
          <p>
            <span className="font-semibold text-green-300">🚦 Priority:</span>{" "}
            <span className="text-green-200">{job.priority}</span>
          </p>
          <p>
            <span className="font-semibold text-green-300">
              🔁 Retry Policy:
            </span>{" "}
            <span className="text-green-200">{job.retryPolicy}</span>
          </p>
          <p>
            <span className="font-semibold text-green-300">
              🔗 Dependencies:
            </span>{" "}
            <span className="text-green-200">
              {job.dependencies?.length > 0
                ? job.dependencies.join(", ")
                : "None"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
