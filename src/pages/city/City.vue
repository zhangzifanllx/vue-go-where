<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
      <city-alpha></city-alpha>
  </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CitySearch from './components/search.vue'
import CityList from './components/list.vue'
import CityAlpha from './components/alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader, CitySearch, CityList, CityAlpha
  }
}
</script>

<style scoped>
</style>
