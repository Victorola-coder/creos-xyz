import axios from "axios";

export const BASE_API_ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/v1' : 'https://creos.onrender.com/api/v1'

const getClient = (
    baseURL = BASE_API_ENDPOINT,
    extraHeaders = {}) => {
    const instance = axios.create({
        headers: {
            "Content-Type": "application/json",
            ...extraHeaders
        },
        baseURL: baseURL,
        timeout: 30000,
    });
    instance?.interceptors?.response?.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log("error from client: ", error)
            if (error.code === "ERR_NETWORK") {
                error['response'] = {
                    data: {
                        title: "Network error",
                        message: "Please try again later, thank you."
                    }
                }
            }
            return Promise.reject(error);
        }
    );
    return instance;
};


const mainClient = getClient(BASE_API_ENDPOINT);
export default mainClient