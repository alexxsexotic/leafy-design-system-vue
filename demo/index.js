import Vue from 'vue'
import App from './App.vue'

import Leafy from '../components/index.js'
import '../lib/styles/style.scss'
import '../lib/icon-style/style.css'

Vue.use(Leafy)

new Vue({
  render: h => h(App)
}).$mount('#app')