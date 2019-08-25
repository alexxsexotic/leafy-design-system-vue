import Button from './Button.vue'
import Checkbox from './Checkbox.vue'
import Icon from './Icon.vue'
import Google from './Google.vue'
import Fb from './Fb.vue'

const components = [
  Button,
  Checkbox,
  Icon,
  Google,
  Fb
]

const install = function(Vue) {
  components.map(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined') {
  install(window.Vue);
}

export {
  install,
  Button,
  Checkbox,
  Icon,
  Google,
  Fb
}

export default {
  install
}