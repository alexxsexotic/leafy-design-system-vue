<template>
  <button 
    @click="load"
    :class="{ 'btn-disabled' : !loaded }"
  >
    <Icon 
      v-if="loaded"
      type="loading" 
      class="right"
    />
    <slot></slot>
  </button>
</template>

<script>
import Icon from './Icon.vue'

export default {
  props: ['type','loaded'],
  components: { Icon },
  methods: {
    load: function() {
      return this.$emit('clickEvent',1)
    }
  }
}
</script>