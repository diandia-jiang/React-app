import axios from 'axios';
const isDev = process.env.NODE_ENV === 'development'; // 当运行 npm run dev 时 条件为真()
// console.log(process.env);
const ajax = axios.create({
  baseURL: isDev ? 'http://www.daxunxun.com' : '真实的请求地址'
})

// 添加请求拦截器 ---- 所有的请求都想要加一个loading的动画效果，如果判断登陆状态
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const newConfig = config;
  // 显示loading
  // 如果请求的接口都需要token
  // newConfig.headers['token'] = window.localStorage.getItem('token')
  return newConfig;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 取消loading效果
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default ajax