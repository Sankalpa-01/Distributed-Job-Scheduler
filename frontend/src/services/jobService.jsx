import axios from "axios";

const API = `https://distributed-job-scheduler-2-backend.onrender.com/api/jobs`;

export const getJobs = () => axios.get(API).then((res) => res.data);
export const getJobById = (id) =>
  axios.get(`${API}/${id}`).then((res) => res.data);
export const createJob = (data) =>
  axios.post(API, data).then((res) => res.data);
export const deleteJob = (id) => axios.delete(`${API}/${id}`);
