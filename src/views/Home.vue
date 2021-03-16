<template>
  <Header :title="appGlobal.name" :titleCallback="GlobalButtonHome">
    <Icon
      name="mdi-exit-to-app"
      @click="GlobalButtonLogout"
      title="Logout Account"
    />
  </Header>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
