import envConfig from "@/configs/env.config";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${envConfig.apiUrl}/${envConfig.apiVersion}`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})


export default axiosInstance;   