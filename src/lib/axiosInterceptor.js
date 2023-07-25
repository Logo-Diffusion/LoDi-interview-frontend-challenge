import axios from "axios";

const Axios = axios.create({
    // baseURL: process.env.REACT_APP_SERVER_URL,
    baseURL: "https://qstnr.intvw.logodiffusion.com/api/",
});

const requestHandler = (config) => {
    return Promise.resolve(config);
};

//request interceptor
Axios.interceptors.request.use(
    (config) => requestHandler(config),
    (error) => Promise.reject(error)
);

const errorHandler = async (error) => {
    return Promise.reject(error);
};

//response interceptor
Axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => errorHandler(error)
);

export default Axios;
