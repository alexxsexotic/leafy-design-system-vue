<template>
  <label 
    class="input-checkbox"
    @click.prevent="emitEvent"
    :class="{ 'input-checked' : checked }"
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
  props: {
    checked: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    emitEvent() {
      this.checked = !this.checked
      return this.$emit('change', this.value)
    }
  }
}
</script>
