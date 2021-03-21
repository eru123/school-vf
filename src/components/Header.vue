<template>
  <header class="base-header-component">
    <div>{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </header>
</template>
<script>
import "@/styles/header.stylus";
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>
