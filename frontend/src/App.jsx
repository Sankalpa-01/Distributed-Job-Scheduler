import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateJob from "./pages/CreateJob.jsx";
import JobDetail from "./pages/JobDetail.jsx";

function App() {
  return (
    <div className="min-h-screen bg-black text-green-300 p-4">
      <nav className="flex justify-between items-center mb-6 border-b border-green-600 pb-4">
        <h1 className="text-2xl font-extrabold text-green-500">
          🗓️ Job Scheduler
        </h1>
        <div className="space-x-6">
          <Link className="hover:text-white transition" to="/">
            Home
          </Link>
          <Link className="hover:text-white transition" to="/create">
            Create Job
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateJob />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
