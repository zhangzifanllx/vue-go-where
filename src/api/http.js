import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/static/mock',
    timeout: 5000
  })
  // 请求拦截
  instance.interceptors.request.use(request => {
    return request
  })
  // 响应拦截
  instance.interceptors.response.use(response => {
    return response.data
  })
  return instance(config)
}
