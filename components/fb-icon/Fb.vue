<template>
  <button
    @click="$emit('clickEvenet',1)"
    class="btn btn_default"
  >
    <i class="icon l-fb-color">
      <span class="path1"></span>
      <span class="path2"></span>
    </i>
    <slot></slot>
  </button>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'LFb',
}
</script>

<style lang="scss" scoped>
* {
  font-family: inherit;
}

button {
  background: white;
  font-weight: normal;
}

i {
  margin-right: 10px
}
</style>
