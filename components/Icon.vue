<template>
    <i 
      class="icon"
      :class="{ 'loading-motion' :loading }"
      v-html="require('!html-loader!./../lib/icons/'+ type +'.svg')"
    >
    </i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>

