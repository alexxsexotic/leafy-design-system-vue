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
    <div style="display: inline-block"><slot style="margin-right: 10px"></slot></div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      value: this.checked
    }
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    checked(val) {
      this.value = val
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
