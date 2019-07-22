<template>
  <div class="item" v-show="isShow">
      <span v-bind:style="{'background-color': hovering ? 'lightgray' : 'white'}">
        <span>{{orderNumber}}. </span>
        <input @change="setChecked" type="checkbox" v-model="checked">
        <span class="item-text" v-bind:style="{
        'text-decoration': checked ? 'line-through' : 'none'}"
        v-show="!editing" v-on:dblclick="editItem" @mouseover="showShadow" @mouseout="hideShadow">{{text}}</span>
        <input v-show="editing" autofocus="true" type="text" v-model="text" @keyup.esc="cancelEdit" @keyup.enter="doneEdit">
      </span>
  </div>
</template>

<script>
import { SET_CHECKED } from '../store/mutation-types';
export default {
  name: "item",
  data() {
    return {
      text: this.initItem.text,
      checked: this.initItem.checked,
      editing: this.initItem.editItem,
      hovering: this.initItem.hovering,

      cachedText: "",
      'global_index': this.$store.state.index
    };
  },
  props: {
    initItem: Object,
    index: Number
  },
  computed: {
    isShow() {
      let show = false;
      let level = this.$store.state.level;
      if (level === "checked") {
        show = this.checked === true;
      } else if (level === "unchecked") {
        show =  this.checked === false;
      } else show = true;
      return show;
    },
    orderNumber() {
      let level = this.$store.state.level;
      let text = this.text;
      let filterItems;
      if (level === "all") {
        filterItems =  this.$store.state.items;
      } else if (level === "checked") {
        filterItems =  this.$store.state.items.filter(x => x.checked);
      } else if (level === "unchecked") {
        filterItems =  this.$store.state.items.filter(x => !x.checked);
      }
      return filterItems.findIndex(x => x.text === text) + 1;
    }
  },
  methods: {
    setChecked() {
      let payload = {
        index: this.index,
        checked: this.checked
      };
      this.$store.commit(SET_CHECKED,payload);
    },
    editItem() {
      this.editing = true;
      this.cachedText = this.text;
    },
    cancelEdit() {
      this.editing = false;
      this.text = this.cachedText;
    },
    doneEdit() {
      this.editing = false;
    },
    showShadow() {
      this.hovering = true;
    },
    hideShadow() {
      this.hovering = false;
    }
  }
};
</script>

<style scoped>
</style>
