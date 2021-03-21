<template>
  <Header :title="appGlobal.name" :titleCallback="GlobalButtonHome">
    <router-link :to="{ name: 'Home' }" title="Go to Home tab">
      <Icon name="mdi-home" />
    </router-link>

    <router-link :to="{ name: 'Account' }" title="Go to Account tab">
      <Icon name="mdi-account" />
    </router-link>

    <router-link :to="{ name: 'Settings' }" title="Go to Settings tab">
      <Icon name="mdi-cog" />
    </router-link>

    <Icon
      name="mdi-logout"
      title="Logout Account"
      @click="GlobalButtonLogout"
    />
  </Header>
</template>

<script>
export default {
  name: "AuthenticatedHeader"
};
</script>
