import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://hashide-backend.azurewebsites.net/`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axiosInstance;