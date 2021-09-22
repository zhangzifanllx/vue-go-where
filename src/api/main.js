import { request } from './http'

export function getMainAllData () {
  return request({
    url: '/index.json',
    method: 'GET'
  })
}
