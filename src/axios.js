import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://hash-ide.herokuapp.com/`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axiosInstance;