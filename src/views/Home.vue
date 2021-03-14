<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import firebase from "@/firebase";
import "@firebase/auth";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (!user.emailVerified) {
          this.$router.push({ name: "VerifyEmail" });
        }
      } else {
        this.$router.push({ name: "Auth" });
      }
      this.loaded = true;
    });
  },
  components: {
    HelloWorld
  }
};
</script>
