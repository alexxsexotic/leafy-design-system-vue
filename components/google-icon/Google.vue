<template>
  <button
    @click="$emit('clickEvent',1)"
    class="btn btn_default"
  >
    <i class="icon l-google-color">
      <span class="path1"></span>
      <span class="path2"></span>
      <span class="path3"></span>
      <span class="path4"></span>
    </i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'LGoogle',
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