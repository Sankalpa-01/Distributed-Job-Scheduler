import JobCard from "./JobCard.jsx";

export default function JobList({ jobs }) {
  if (!jobs.length) return <p className="text-green-400">No jobs found.</p>;

  return (
    <div className="grid gap-4">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}
