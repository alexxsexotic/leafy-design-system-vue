
'use strict';

import Button from './Button.vue'
import Checkbox from './Checkbox.vue'
import Icon from './Icon.vue'
import Google from './Google.vue'
import Fb from './Fb.vue'

const components = [
  Checkbox,
  Google,
  Fb
]

const install = (Vue) => {
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
  Icon,
  Google,
  Fb
}

export default {
  install
}