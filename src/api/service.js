import axios from 'axios'

// 创建axios实例
const service = axios.create({
    // baseURL: '/apis', // api的base_url
    //baseURL: '',  // api的base_url

    timeout: 10000 // 请求超时时间
});


// request拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    // Do something with request error
    Promise.reject(error)
});

// respone拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        //此处进行异常处理
        return Promise.reject(error)
    }
);

export default service
