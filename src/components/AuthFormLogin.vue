<template>
  <div class="auth-form">
    <h1>Sign in</h1>
    <div>
      <input type="text" v-model="email" placeholder="Email" /> <br />
      <input type="password" v-model="pass" placeholder="Password" /> <br />
      <button @click="submit">Authenticate</button>
    </div>
  </div>
</template>
<script>
import "@/styles/auth-form.stylus";
// import firebase from "@/firebase";
export default {
  name: "AuthFormLogin",
  data: () => ({
    email: "",
    pass: "",
    loading: false,
  }),
  methods: {
    submit() {
      this.loading = true;
    },
  },
};
</script>
