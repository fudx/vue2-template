import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_AXIOS_BASEURL

//1. 创建新的axios实例，
const service = axios.create({
    // 公共接口--这里注意后面会讲
    baseURL: process.env.BASE_API,
    // 超时时间 单位是ms，这里设置了3s的超时时间
    timeout: 3 * 1000
  })
 



// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log('发送前')
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log('响应后')
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// Vue.prototype.$axios = axios
export default axios
