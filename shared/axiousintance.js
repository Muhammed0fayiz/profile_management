
export const localhost_backend = process.env.NEXT_PUBLIC_SERVER_URL;


import axios from 'axios';


const axiosInstance = axios.create({
   baseURL: localhost_backend,
   headers: { "Content-Type": "application/json" },
   withCredentials: true,
});



export const axiosInstanceMultipart = axios.create({
  baseURL: localhost_backend,
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: true,
});
axiosInstance.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response?.status === 401) {
   
      console.error("Unauthorized, redirecting...");
 
    }
    return Promise.reject(error); 
  }
);

export default axiosInstance;
