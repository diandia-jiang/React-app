import ajax from './axios'
// 暴露 方法
export const getHomeBanner = () => {
  return ajax.get('/banner')
}
export const getHomePro = () => {
  return ajax.get('/douban')
}

export const login = (params) => {
  return ajax.post('/users/login', params)
}
