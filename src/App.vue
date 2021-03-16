<template>
  <div class="lds-cnt" v-if="loading">
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="lds-msg">{{ loadingMessage }}</div>
  </div>
  <router-view />
</template>
<script>
import firebase from "@/firebase";
import "@firebase/auth";
export default {
  name: "App",
  created() {
    this.$store.commit("loading", true);
    firebase.auth().onAuthStateChanged(user => {
      this.$store.commit("loading", false);
      this.$store.commit("loaded", true);
      if (user) {
        console.log("authenticated from App.vue", user);
        this.$store.commit("usr", user);
      } else {
        console.log("log in first");
        this.$store.commit("usr", {});
      }
    });
  }
};
</script>
<style lang="stylus">
body {
  box-sizing: border-box;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  user-select: none;
  outline: none;
}

input textarea {
  user-select: auto;
}

button a {
  cursor: pointer;
}
</style>
