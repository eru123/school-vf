<template>
  <Header :title="appGlobal.name"></Header>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Header
  }
};
</script>
