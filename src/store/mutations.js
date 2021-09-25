export default {
  changeCity (state, data) {
    localStorage.city = data
    state.city = localStorage.city
  }
}
