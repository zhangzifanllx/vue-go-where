<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :cities="cities" :hotCities="hotCities" :currentCity="currentCity" :alpha="alpha"></city-list>
      <city-alpha :cities="cities" @change="changeAlpha"></city-alpha>
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
      hotCities: [],
      currentCity: '',
      alpha: ''
    }
  },
  mounted () {
    cityData()
      .then(res => {
        console.log(res)
        this.currentCity = res.data.currentCity
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      })
  },
  methods: {
    changeAlpha (alpha) {
      this.alpha = alpha
    }
  }
}
</script>

<style scoped>
</style>
