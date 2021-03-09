<template>
  <div class="auth-form">
    <h1>Sign in</h1>
    <div>
      <div class="auth-form-error" v-if="error" @click="error = ''">{{ error }}</div>
      <input type="text" v-model="email" placeholder="Email" :disabled="loading" /> <br />
      <input type="password" v-model="pass" placeholder="Password" :disabled="loading" />
      <br />
      <button @click="submit" :disabled="loading">Authenticate</button>
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
    error: "",
  }),
  methods: {
    submit() {
      this.loading = true;
    },
  },
};
</script>
