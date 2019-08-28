
'use strict';

import Icon from './icon'
// import Button from './Button.vue'
// import Checkbox from './Checkbox.vue'
// import Google from './Google.vue'
// import Fb from './Fb.vue'

const components = [
  Icon,
  // Button,
  // Checkbox,
  // Google,
  // Fb
]

const install = (Vue) => {
  components.map(component => {
    Vue.use(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Icon,
  // Button,
  // Checkbox,
  // Google,
  // Fb
}

export default {
  install
}