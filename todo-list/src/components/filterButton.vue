<template>
  <div>
    <span :style="{'border-style' : this.$store.state.level === 'all' ? 'solid' : 'none'}" v-on:click="setLevel('all')">ALL</span>
    <span :style="{'border-style' : this.$store.state.level === 'unchecked' ? 'solid' : 'none'}" v-on:click="setLevel('unchecked')">Active</span>
    <span :style="{'border-style' : this.$store.state.level === 'checked' ? 'solid' : 'none'}" v-on:click="setLevel('checked')">Complete</span>
  </div>
</template>

<script>
import { SET_LEVEL } from "../store/const-types";
export default {
  name: 'filterButton',
  props: {
    msg: String
  },
  data() {
      return {
      }
  },
  methods: {
    setLevel(level) {
      this.$store.commit(SET_LEVEL,level);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  border-width: 1px;
  border-color: lightgray;
  padding: 5px;
  margin: 10px;
  font-weight: bold;
}
div {
  text-align: center;
}
</style>
