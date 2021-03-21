<template>
  <AuthHeader />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import AuthHeader from "@/components/AuthenticatedHeader.vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    AuthHeader,
    HelloWorld
  }
};
</script>
