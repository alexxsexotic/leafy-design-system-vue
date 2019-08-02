import Button from './Button.vue'
import Checkbox from './Checkbox.vue'
import Icon from './Icon.vue'

const components = [
  Button,
  Checkbox,
  // Icon
]

const install = function(Vue) {
  components.map(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Button,
  Checkbox,
  // Icon
}

export default {
  install
}