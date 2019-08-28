<template>
  <button 
    @click="load"
    :class="{ 'btn-disabled' : loaded }"
  >
    <Icon 
      v-if="loaded"
      name="loading" 
      :class="[light ? 'right light' : 'right dark']"
      loading
    />
    <slot></slot>
  </button>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'LButton',
  props: ['loaded', 'light'],
  components: { Icon },
  methods: {
    load: function() {
      return this.$emit('clickEvent',1)
    }
  }
}
</script>