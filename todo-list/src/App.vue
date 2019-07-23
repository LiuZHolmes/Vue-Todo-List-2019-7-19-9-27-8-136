<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { GET_TODO } from "./store/const-types";
export default {
  name: "app",
  components: {
  },
  created() {
    this.$store.dispatch(GET_TODO);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
