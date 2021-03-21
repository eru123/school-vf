<template>
  <AuthHeader />
  <div class="settings-page"></div>
</template>

<script>
import AuthHeader from "@/components/AuthenticatedHeader.vue";
import "@/styles/account-page.stylus";
export default {
  name: "Account",
  components: {
    AuthHeader
  }
};
</script>
