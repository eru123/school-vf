<template>
  <div></div>
</template>
<script>
import firebase from "@/firebase";
import "@firebase/auth";
export default {
  name: "Logout",
  async created() {
    this.$store.commit("loading", true);
    await firebase
      .auth()
      .signOut()
      .then(() => {
        this.$store.commit("loading", false);
        this.$router.push({ name: "Auth" });
      })
      .catch(() => {
        this.$store.commit("loading", false);
        this.$router.push({ name: "Auth" });
      });
  }
};
</script>
