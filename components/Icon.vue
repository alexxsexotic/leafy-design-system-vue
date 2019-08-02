<template>
    <i 
      class="icon"
      :class="{ 'loading-motion' :loading }"
      v-html="svgHtml"
    ></i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean
    },
  },
  computed: {
    svgHtml: function() {
      let svgHtml = '';
      try {
        svgHtml = require(`!html-loader!../lib/icons/outline/${this.type}.svg`)
      } catch (err) {
        console.warn('Unable to load this icon. Verify if it exists')
      }
      return svgHtml
    }
  }
};
</script>