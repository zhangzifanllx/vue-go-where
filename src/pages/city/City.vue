<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :cities="cities" :hotCities="hotCities"></city-list>
      <city-alpha></city-alpha>
  </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CitySearch from './components/search.vue'
import CityList from './components/list.vue'
import CityAlpha from './components/alphabet.vue'
import { cityData } from 'api/city.js'
export default {
  name: 'City',
  components: {
    CityHeader, CitySearch, CityList, CityAlpha
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  mounted () {
    cityData()
      .then(res => {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      })
  }
}
</script>

<style scoped>
</style>
