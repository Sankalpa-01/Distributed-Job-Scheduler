import axios from "axios";

// Read from environment variable
const API = `${import.meta.env.VITE_API_BASE_URL}/api/jobs`;

export const getJobs = () => axios.get(API).then((res) => res.data);

export const getJobById = (id) =>
  axios.get(`${API}/${id}`).then((res) => res.data);

export const createJob = (data) =>
  axios.post(API, data).then((res) => res.data);

export const deleteJob = (id) => axios.delete(`${API}/${id}`);
