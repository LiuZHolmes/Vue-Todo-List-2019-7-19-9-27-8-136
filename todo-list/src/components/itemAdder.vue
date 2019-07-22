<template>
  <div class="itemAdder">
    <input class="itemAdder" @keyup.enter="addItem" v-model="newItem">
    <input type="button" value="Add" v-on:click="addItem">
  </div>
</template>

<script>
import { ADD_ITEM } from '../store/mutation-types';
export default {
  data() {
      return {
        newItem: this.$store.state.newItem
      }
  },
  methods: {
    addItem() {
      this.$store.commit(ADD_ITEM,this.newItem);
      this.newItem="";
    }
  }
}
</script>

<style scoped>
.itemAdder {
  margin: 10px;
}
input[type="button"] {
  font-size: 15px;
  background-color: #2c3e50;
  color: aliceblue;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-style: none;
  border-radius:15px;
}
</style>