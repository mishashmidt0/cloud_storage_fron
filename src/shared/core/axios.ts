import axios from "axios";
import { getCookie } from "cookies-next";

axios.defaults.baseURL = "http://localhost:9000";
axios.interceptors.request.use((config)=>{
    if(typeof window === 'undefined'){
        const accessToken = getCookie('accessToken');
         config.headers.Authorization = "Bearer " + accessToken;
    }
    return config;
}
)

export default axios
