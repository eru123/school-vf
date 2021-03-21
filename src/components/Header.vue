<template>
  <header class="base-header-component">
    <div>{{ title }}</div>
    <dialog v-if="settingsTab">
      <ul>
        <header>
          <Icon name="mdi-arrow-left" @click="GlobalButtonCloseSettingsTab" />
          Settings <small>Menu</small>
        </header>
        <li>one</li>
        <li>two</li>
        <li @click="GlobalButtonLogout">
          <Icon name="mdi-logout" />Logout <span></span>
        </li>
      </ul>
    </dialog>
    <div>
      <slot></slot>
    </div>
  </header>
</template>
<script>
import "@/styles/header.stylus";
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>
