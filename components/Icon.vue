<template>
    <i 
      class="icon"
      :class="{ 'loading-motion' :loading }"
      v-html="icons.type"
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
  data() {
    return {
      icons: {
        user: '<img svg-inline src="./../lib/icons/outline/user.svg"/>'
      }
    }
  },
  // computed: {
  //   svgHtml: function() {
  //     let svgHtml = '';
  //     try {
  //       svgHtml = require(`!html-loader!./../lib/icons/outline/${this.type}.svg`)
  //     } catch (err) {
  //       console.warn('Unable to load this icon. Verify if it exists')
  //     }
  //     return svgHtml
  //   }
  // }
};
</script>