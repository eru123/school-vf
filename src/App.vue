<template>
  <router-view />
</template>
<script>
import firebase from "@/firebase";
import "@firebase/auth";
export default {
  name: "App",
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("authenticated from App.vue", user);
        this.$store.commit("usr", user);
      } else {
        console.log("log in first");
      }
    });
  }
};
</script>
<style lang="stylus">
body
  box-sizing border-box
  margin 0
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
*
  user-select none
input textarea
  user-select auto
button a
  cursor pointer
</style>
