<template>
  <div>
    <h1>Login</h1>
    <div>
      <input type="text" v-model="email" placeholder="Email" /> <br />
      <input type="password" v-model="pass" placeholder="Password" /> <br />
      <button @click="submit">Login</button>
    </div>
  </div>
</template>
<script>
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
