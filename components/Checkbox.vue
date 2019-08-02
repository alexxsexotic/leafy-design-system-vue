<template>
  <label 
    class="input-checkbox"
    @click.prevent="emitEvent"
    :class="{ 'input-checked' : value }"
  >
    <span class="outer">
      <span></span>
      <input type="checkbox">
    </span>
    <div style="display: inline-block ;margin-left: 10px;"><slot></slot></div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  },
  methods: {
    emitEvent() {
      this.value = !this.value
      return this.$emit('change', this.value)
    }
  }
}
</script>
