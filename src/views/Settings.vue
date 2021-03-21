<template>
  <AuthHeader />
  <div class="settings-page"></div>
</template>

<script>
import AuthHeader from "@/components/AuthenticatedHeader.vue";
import "@/styles/settings-page.stylus";
export default {
  name: "Settings",
  components: {
    AuthHeader
  }
};
</script>
