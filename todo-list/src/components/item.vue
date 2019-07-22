<template>
  <div class="item">
      <span v-bind:style="{'background-color': hovering ? 'lightgray' : 'white'}">
      <input type="checkbox" v-model="checked">
      <span class="item" v-bind:style="{
        'text-decoration': checked ? 'line-through' : 'none'}"
        v-show="!editing" v-on:dblclick="editItem" @mouseover="showShadow" @mouseout="hideShadow">{{text}}</span>
      <input v-show="editing" autofocus="true" type="text" v-model="text" @keyup.esc="cancelEdit" @keyup.enter="doneEdit">
      </span>
  </div>
</template>

<script>
export default {
  name: "item",
  data() {
    return {
        text: this.initItem.text,
        checked: this.initItem.checked,
        editing: this.initItem.editItem,
        hovering: this.initItem.hovering
    };
  },
  props: {
    initItem: Object
  },
  computed: {
    filteredItems() {
      return this.filterItems(this.$store.state.level);
    }
  },
  methods: {
    filterItems(level) {
      if (level === "all") {
        return this.items;
      } else if (level === "checked") {
        return this.items.filter(x => x.checked);
      } else if (level === "unchecked") {
        return this.items.filter(x => !x.checked);
      }
    },
    editItem() {
      this.editing = true;
      // this.cachedText = item.text;
    },
    cancelEdit() {
      this.editing = false;
      // item.text = this.cachedText;
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