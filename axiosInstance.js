import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your backend server URL
  timeout: 5000, // Adjust the timeout as needed
});

// Set headers for CORS
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
axiosInstance.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
axiosInstance.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';

export default axiosInstance;
