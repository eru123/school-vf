<template>
  <div>
    <h1>Authentication</h1>
    <div>
      <div v-if="tab == 1">
        <Login />
        <div class="af-bottom">
          Do not have an account? <span @click="tab = 2">Sign up now</span><br />
          By creating an signing in, you agreed to our
          <span @click="tab = 3">Terms and Agreements</span>
        </div>
      </div>
      <div v-if="tab == 2">
        <Register />
        <div class="af-bottom">
          Already have an account? <span @click="tab = 1">Sign in now</span> <br />
          By signing up, you agreed to our
          <span @click="tab = 3">Terms and Agreements</span>
        </div>
      </div>
      <div v-if="tab == 3">
        <div class="af-bottom">
          <span @click="tab = 2">Sign up now</span><br />
          <span @click="tab = 1">Sign in now</span> <br />
        </div>
        <p>lorem</p>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "@/components/AuthFormLogin.vue";
import Register from "@/components/AuthFormRegister.vue";
export default {
  name: "Auth",
  data: () => ({
    tab: 1,
  }),
  components: {
    Login,
    Register,
  },
};
</script>
<style lang="stylus">
.af-bottom
    span
        color dodgerblue
</style>
