import axios from 'axios';

// Use Vite env variable for API base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
 || 'http://localhost:8000/api', // fallback if env missing
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
