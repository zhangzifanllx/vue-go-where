import { request } from './http'

export function getMainAllData (city) {
  return request({
    url: `/index.json?city=${city}`,
    method: 'GET'
  })
}
