<template>
    <i
      class="icon"
      :class="[{'loading-motion' : loading}, 'l-' + name]"
    >
    </i>
</template>

<script>
export default {
  name: 'LIcon',
  props: {
    name: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
  },
};
</script>

