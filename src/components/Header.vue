<template>
  <header class="base-header-component">
    <div>{{ title }}</div>
    <div>
      <Icon name="mdi-account" />
      <Icon name="mdi-account" />
      <Icon name="mdi-account" />
      <Icon name="mdi-exit-to-app" />
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>
<style lang="stylus">
.base-header-component {
  margin: 0;
  background: dodgerblue;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 2em;

  div:first-child {
    flex: auto;
    text-align: left;
    font-size: 1.5em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 8px 0;
  }

  div:last-child {
    flex: auto;
    text-align: right;

    > * {
      display: inline-block;
      padding: 10px 13px;
      margin: 8px 4px;
      border-radius: 50%;
      font-size: 1.5em;

      &:hover {
        background: rgba(0, 0, 0, 0.5);
      }

      &:active {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
