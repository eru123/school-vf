<template>
  <div class="page-auth" v-if="loaded">
    <h1>Authentication</h1>
    <div class="af-container">
      <div v-if="tab == 1">
        <Login class="af-main" />
        <div class="af-bottom">
          <p>
            Do not have an account? <span @click="tab = 2">Sign up now</span>
          </p>
          <p>
            By creating an signing in, you agreed to our
            <span @click="tab = 3">Terms and Agreements</span>
          </p>
        </div>
      </div>
      <div v-if="tab == 2">
        <Register class="af-main" />
        <div class="af-bottom">
          <p>
            Already have an account? <span @click="tab = 1">Sign in now</span>
          </p>
          <p>
            By signing up, you agreed to our
            <span @click="tab = 3">Terms and Agreements</span>
          </p>
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
import "@/styles/auth-page.stylus";
import Login from "@/components/AuthFormLogin.vue";
import Register from "@/components/AuthFormRegister.vue";
export default {
  name: "Auth",
  data: () => ({
    tab: 1
  }),
  created() {
    console.log("auth");
  },
  watch: {
    usr(n) {
      if (n) {
        if (n.emailVerified) {
          this.$router.push({ name: "Home" });
        } else {
          this.$router.push({ name: "VerifyEmail" });
        }
      }
    }
  },
  components: {
    Login,
    Register
  }
};
</script>
