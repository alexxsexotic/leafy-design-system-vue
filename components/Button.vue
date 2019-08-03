<template>
  <button 
    @click="load"
    :class="{ 'btn-disabled' : !loaded }"
  >
    <Icon 
      v-if="!loaded"
      type="loading" 
      loading
      class="right"
    />
    <slot></slot>
  </button>
</template>

<script>
import Icon from './Icon.vue'

export default {
  props: ['type'],
  components: { Icon },
  data() {
    return {
      loaded: true
    }
  },
  methods: {
    load: function() {
      this.loaded = false
    }
  }
}
</script>