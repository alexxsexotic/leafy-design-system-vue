
'use strict';

import Icon from './icon'
import Button from './button'
import Checkbox from './checkbox'
import Google from './google-icon'
import Fb from './fb-icon'

const components = [
  Icon,
  Button,
  Checkbox,
  Google,
  Fb
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
  Button,
  Checkbox,
  Google,
  Fb
}

export default {
  install
}