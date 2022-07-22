import axios from "axios"


class ResponseSuccess {
    constructor(success, code, message, data) {
        this.success = success;
        this.message = message;
        this.code = code;
        this.data = data;
    }
}

class ResponseError {
    constructor(success, message, code, errors) {
        this.success = success;
        this.message = message;
        this.code = code;
        this.errors = errors;
    }
    getError() {
        const errorsString = [];
        for (let key in this.errors) {
            if (this.errors.hasOwnProperty(key)) {
                this.errors[key].forEach(element => {
                    errorsString.push(element)
                });
            }
        }
        return errorsString;
    }
}

const apiService = () => {
    console.log("haha", process.env.REACT_APP_HUE_AUTHN_ENDPOINT)
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_HUE_AUTHN_ENDPOINT,
        responseType: 'json',
        timeout: 1000 * 60 * 2,
        withCredentials: true,
        httpAgent: 'PostmanRuntime/7.29.0',
        

    })
  
    axiosInstance.defaults.headers.common['Authorization'] = 'chien'
    axiosInstance.defaults.headers.post['Content-Type'] ='application/json ; charset=UTF-8';
    // axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    axiosInstance.defaults.headers.common['Access-Control-Allow-Credentials'] = true


    axiosInstance.interceptors.request.use(function (config) {
        console.log(config)
        return config;

    }, function (error) {
        return Promise.reject(error)
    })

    axiosInstance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    })

    return axiosInstance
}

export default apiService;