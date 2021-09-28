import { request } from './http'
export function getDetailInfo (id) {
  return request({
    url: `/detail.json?id=${id}`,
    method: 'GET'
  })
}
