import axios from 'axios';
import { store } from '../../redux/store'; 
const axiosInstance = axios.create({
  baseURL: 'https://api.digibulkmarketing.com/',
});
axiosInstance.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.user.token; // Adjust based on your state structure
  const user = state.user.detail; // Adjust based on your state structure
  console.log('Token in interceptor:', token); // Log the token
  console.log('User in interceptor:', user); // Log the user details
  const isMultipartData = config.headers['Content-Type'] === 'multipart/form-data';
  config.headers = {
    'Content-Type': isMultipartData ? 'multipart/form-data' : 'application/json',
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };
  return config;
}, (error) => {
  // Handle request error here
  return Promise.reject(error);
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('axiosInstance error - ' + JSON.stringify(error));
    if (error.response) {
      if (error.response.status === 401) {
        console.log('Authentication Failed');
        // Handle 401 error - token expired/unauthorized
        // Optionally, clear local storage and redirect to login
        localStorage.removeItem('persist:auth');
        window.location.href = '/';
      }
    } else {
      // Handle network or other errors without response
      console.log('Network error or no response from server');
    }
    return Promise.reject(error); // Ensure the error is still returned
  }
);
export default axiosInstance;