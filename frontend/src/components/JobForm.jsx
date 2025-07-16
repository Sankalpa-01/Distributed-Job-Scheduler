import { useState, useEffect } from "react";
import { createJob, getJobs } from "../services/jobService.jsx";
import { useNavigate } from "react-router-dom";

export default function JobForm() {
  const [formData, setFormData] = useState({
    name: "",
    schedule: "",
    command: "",
    priority: "Medium",
    retryPolicy: "",
    dependencies: [],
  });

  const [allJobs, setAllJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getJobs().then(setAllJobs);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dependencies") {
      const selected = Array.from(e.target.selectedOptions).map(
        (opt) => opt.value
      );
      setFormData((prev) => ({ ...prev, dependencies: selected }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(formData);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 p-8 bg-green-950/50 border border-green-700 rounded-lg shadow-xl"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-4 text-center">
          Create New Job
        </h2>

        <div>
          <label className="block text-sm font-semibold text-green-300 mb-1">
            Job Name
          </label>
          <input
            name="name"
            placeholder="Job name"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-green-600 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-300 mb-1">
            Cron Schedule
          </label>
          <input
            name="schedule"
            placeholder="*/5 * * * *"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-green-600 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-300 mb-1">
            Command to Run
          </label>
          <input
            name="command"
            placeholder="Command to run"
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-black border border-green-600 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-300 mb-1">
            Priority
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full p-3 rounded bg-black border border-green-600 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-300 mb-1">
            Retry Times
          </label>
          <input
            name="retryPolicy"
            type="number"
            placeholder="Retry times"
            onChange={handleChange}
            value={formData.retryPolicy}
            className="w-full p-3 rounded bg-black border border-green-600 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-green-300 mb-1">
            Dependencies (optional)
          </label>
          <select
            name="dependencies"
            multiple
            value={formData.dependencies}
            onChange={handleChange}
            className="w-full h-32 p-3 rounded bg-black border border-green-600 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {allJobs.map((job) => (
              <option key={job._id} value={job._id}>
                {job.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-green-400 mt-1">
            Hold Ctrl (Windows) or Cmd (Mac) to select multiple
          </p>
        </div>

        <div className="text-center">
          <button className="bg-green-500 text-black font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition">
            Create Job
          </button>
        </div>
      </form>
    </div>
  );
}
