import Vue from 'vue'
import App from './App.vue'

import Leafy from '../dist/index.js'
import '../dist/style.min.css'
// import { LCheckbox } from '../components/index.js'

Vue.use(Leafy)
// Vue.component('LCheckbox', LCheckbox)

new Vue({
  render: h => h(App)
}).$mount('#app')