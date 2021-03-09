<template>
  <div class="lds-cnt">
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
    <div class="lds-msg">Logging out<i></i><i></i><i></i></div>
  </div>
</template>
<script>
import firebase from "@/firebase";

export default {
  name: "Logout",
  created() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push({ name: "Auth" });
      })
      .catch((e) => {
        console.log("[LOGOUT] Error:", e);
        this.$router.push({ name: "Auth" });
      });
  },
};
</script>
