<template>
  <div class="auth-form">
    <h1>Sign in</h1>
    <div>
      <div class="auth-form-error" v-if="error" @click="error = ''">
        {{ error }}
      </div>
      <input
        type="text"
        v-model="email"
        placeholder="Email"
        :disabled="loading"
      />
      <br />
      <input
        type="password"
        v-model="pass"
        placeholder="Password"
        :disabled="loading"
      />
      <br />
      <button @click="submit" :disabled="loading">Authenticate</button>
    </div>
  </div>
</template>
<script>
import "@/styles/auth-form.stylus";
import firebase from "@/firebase";
export default {
  name: "AuthFormLogin",
  data: () => ({
    email: "",
    pass: "",
    loading: false,
    error: ""
  }),
  methods: {
    async submit() {
      if (this.email && this.pass) {
        this.loading = true;
        this.$store.commit("loading", true);
        this.$store.commit("loadingMessage", "Logging in");
        this.error = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.pass)
          .then(() => {
            this.$router.push({ name: "Home" });
            return "";
          })
          .catch(error => {
            return (
              error.message ||
              `Error code: ${error.code}` ||
              "Unknown Error Occur"
            );
          })
          .finally(e => {
            this.loading = false;
            this.$store.commit("loading", false);
            this.$store.commit("loadingMessage", "");
            return e;
          });
      } else {
        this.error = "Input the credentials first";
      }
    }
  }
};
</script>
