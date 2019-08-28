<template>
  <a class="btn btn_default" :href="link">
    <i class="icon l-google-color">
      <span class="path1"></span>
      <span class="path2"></span>
      <span class="path3"></span>
      <span class="path4"></span>
    </i>
    <slot></slot>
  </a>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'LGoogle',
  props: [ 'link' ],
  components: { Icon }
}
</script>

<style lang="scss" scoped>
* {
  font-family: inherit;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  font-weight: normal;
  font-size: .9em;
}

/deep/ i {
  margin-right: 10px
}
</style>