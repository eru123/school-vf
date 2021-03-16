<template>
  <i v-mdi>{{ name }}</i>
</template>
<script>
export default {
  name: "GIcon",
  props: {
    name: String
  }
};
</script>
