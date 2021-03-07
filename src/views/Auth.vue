<template>
  <div class="page-auth">
    <h1>Authentication</h1>
    <div class="af-container">
      <div v-if="tab == 1">
        <Login class="af-main" />
        <div class="af-bottom">
          <p>Do not have an account? <span @click="tab = 2">Sign up now</span></p>
          <p>
            By creating an signing in, you agreed to our
            <span @click="tab = 3">Terms and Agreements</span>
          </p>
        </div>
      </div>
      <div v-if="tab == 2">
        <Register class="af-main" />
        <div class="af-bottom">
          <p>Already have an account? <span @click="tab = 1">Sign in now</span></p>
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
.page-auth
  padding 0 1em

.af-container
  max-width 450px
  min-width 250px
  margin 2em auto
  border-radius 1em
  box-shadow: 0 0 1em rgba(0,0,0,.2)
  padding 20px 0

.af-bottom
  max-width 80%
  margin 20px auto
  p
    margin-bottom 1em
  span
    color dodgerblue
    cursor pointer
    &:hover
      color #0066cc
</style>
