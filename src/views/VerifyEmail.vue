<template>
  <Header :title="appGlobal.name">
    <Icon
      name="mdi-exit-to-app"
      @click="GlobalButtonLogout"
      title="Logout Account"
    />
  </Header>
  <div class="verify-email-card">
    <div>
      <button class="blue" @click="sendVerification" :disabled="timer">
        Send Email Verification <span v-if="timer">({{ timer }}s)</span>
      </button>
    </div>
    <div>
      <button class="green" @click="verifyEmail">
        I already verified my Email
      </button>
    </div>
  </div>
</template>
<script>
import store from "store";
export default {
  name: "VerifyEmail",
  data: () => ({
    time: 600, // seconds
    timer: 0
  }),
  created() {
    if (this.tdiff() > 0 && this.tdiff() <= this.time) {
      this.openTimer();
    }
  },
  methods: {
    async sendVerification() {
      this.openTimer();
      if (this.reusr().emailVerified) {
        this.$router.push({ name: "Home" });
      } else {
        this.$store.commit("loading", true);
        this.$store.commit("loadingMessage", "Sending Email Verification");
        this.usr.sendEmailVerification();
        await this.delay(5000).then(() => {
          this.$store.commit("loading", false);
          this.$store.commit("loadingMessage", "");
        });
      }
    },
    async verifyEmail() {
      this.$store.commit("loading", true);
      this.$store.commit("loadingMessage", "Verifying Email");
      if (this.reusr().emailVerified) {
        this.$router.push({ name: "Home" });
        this.error = "";
      } else {
        this.error =
          "To verify your email, click the verification link sent to your email";
      }
      await this.delay(5000)
        .then(() => {
          if (this.reusr().emailVerified) {
            this.$router.push({ name: "Home" });
            this.error = "";
          } else {
            this.error =
              "To verify your email, click the verification link sent to your email";
          }
          this.$store.commit("loading", false);
          this.$store.commit("loadingMessage", "");
          if (this.error.length > 0) {
            alert(this.error);
          }
        })
        .catch(() => {
          alert("Error");
        });
    },
    async openTimer() {
      var x = this.tdiff();

      if (x >= this.time) {
        store.set("otstamp", this.ctstamp());
        x = this.tdiff();
      }

      while (x <= this.time) {
        this.timer = this.time - x;
        await this.delay(1000).then(() => {
          if (x > this.time) {
            this.timer = 0;
            x = this.time;
            store.set("otstamp", 0);
          }
          x += 1;
        });
      }
    },
    tdiff() {
      if (this.otstamp()) {
        return Math.ceil((this.ctstamp() - this.otstamp()) / 1000);
      }
      return 0;
    },
    otstamp() {
      let t = store.get("otstamp") || 0;
      return Number(t);
    },
    ctstamp() {
      return Date.now();
    }
  },
  watch: {
    usr(n) {
      if (n && n.emailVerified) {
        this.$router.push({ name: "Home" });
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.verify-email-card {
  margin: 2em auto;
  padding: 1em;
  border-radius: 20px;
  max-width: 400px;
  box-shadow: 1px 1px 10px #ccc;

  div {
    button {
      margin: 1em auto;
      font-family: Arial;
      padding: 1em 1.5em;
      border-radius: 10px;
      border: none;
      transition: 0.2s;
    }

    .blue {
      background: #0073e6;
      color: white;

      &:hover {
        color: white;
        background: #004d99;
      }

      &:disabled {
        color: #00264d;
        background: #66b3ff;
      }
    }

    .green {
      background: teal;
      color: white;

      &:hover {
        background: #004d4d;
      }
    }
  }
}

@media only screen and (max-width: 400px) {
  .verify-email-card {
    border-radius: 0px;
    box-shadow: none;
  }
}
</style>
