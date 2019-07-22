<template>
  <div class="ToDoList">
    <itemAdder></itemAdder>
    <!-- <ol>
      <li v-for="item in filteredItems" :key="item.id">
      <span v-bind:style="{'background-color': item.hovering ? 'lightgray' : 'white'}">
      <input type="checkbox" v-model="item.checked">
      <span class="item" v-bind:style="{
        'text-decoration': item.checked ? 'line-through' : 'none'}"
        v-show="!item.editing" v-on:dblclick="editItem(item)" @mouseover="showShadow(item)" @mouseout="hideShadow(item)">{{item.text}}</span>
      <input v-show="item.editing" autofocus="true" type="text" v-model="item.text" @keyup.esc="cancelEdit(item)" @keyup.enter="doneEdit(item)">
      </span>
      </li>
    </ol> -->
    <!-- <item v-for="i in items.length" :key="i" :initItem="items[i]"></item> -->
    <item v-for="(item, index) in items" :key="index" :initItem="item"></item>
    <filterButton></filterButton>
  </div>
</template>

<script>
import filterButton from "./filterButton";
import itemAdder from "./itemAdder";
import item from "./item"
export default {
  name: "ToDoList",
  data() {
    return {
      editingItem: null,
      cachedText: "",
      items: this.$store.state.items
    };
  },
  props: {
    msg: String
  },
  computed: {
    filteredItems() {
      return this.filterItems(this.$store.state.level);
    }
  },
  components : {
    filterButton,
    itemAdder,
    item
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
    editItem(item) {
      item.editing = true;
      this.cachedText = item.text;
      this.editingItem = item;
    },
    cancelEdit(item) {
      item.editing = false;
      this.editingItem = null;
      item.text = this.cachedText;
    },
    doneEdit(item) {
      item.editing = false;
    },
    showShadow(item) {
      item.hovering = true;
    },
    hideShadow(item) {
      item.hovering = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  border-width: 1px;
  border-color: lightgray;
  padding: 5px;
}
li {
  margin: 10px;
  text-align: left;
}
</style>
