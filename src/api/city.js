import { request } from './http'
export function cityData () {
  return request({
    url: '/city.json',
    methods: 'GET'
  })
}
