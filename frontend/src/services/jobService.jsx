import axios from "axios";

const API = `http://localhost:5000/api/jobs`;

export const getJobs = () => axios.get(API).then((res) => res.data);
export const getJobById = (id) =>
  axios.get(`${API}/${id}`).then((res) => res.data);
export const createJob = (data) =>
  axios.post(API, data).then((res) => res.data);
export const deleteJob = (id) => axios.delete(`${API}/${id}`);
