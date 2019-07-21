
<template>
  <div class="ToDoList">
    <input class="itemAdder" v-model="newItem">
    <input type="button" value="Add" v-on:click="addItem">
    <ol>
      <li v-for="item in filteredItems" :key="item.id">
      <span v-bind:style="{'background-color': item.hovering ? 'lightgray' : 'white'}">
      <input type="checkbox" v-model="item.checked">
      <span class="item" v-bind:style="{
        'text-decoration': item.checked ? 'line-through' : 'none'}"
        v-if="!item.editing" v-on:dblclick="editItem(item)" @mouseover="showShadow(item)" @mouseout="hideShadow(item)">{{item.text}}</span>
      <input v-if="item.editing" autofocus="true" type="text" v-model="item.text" @keyup.esc="cancelEdit(item)" @keyup.enter="doneEdit(item)">
      </span>
      </li>
    </ol>
    <span :style="{'border-style' : this.level === 'all' ? 'solid' : 'none'}" v-on:click="setLevel('all')">ALL</span>
    <span :style="{'border-style' : this.level === 'unchecked' ? 'solid' : 'none'}" v-on:click="setLevel('unchecked')">Active</span>
    <span :style="{'border-style' : this.level === 'checked' ? 'solid' : 'none'}" v-on:click="setLevel('checked')">Complete</span>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      level: "all",
      editingItem: null,
      cachedText: "",
      newItem: "",
      items: [
        {
          text: "Hello world",
          checked: false,
          editing: false,
          hovering: false
        }
      ]
    };
  },
  props: {
    msg: String
  },
  computed: {
    filteredItems() {
      return this.filterItems(this.level);
    }
  },
  methods: {
    addItem() {
      this.items.push({
        text: this.newItem,
        checked: false,
        editing: false,
        hovering: false
      });
      this.newItem = "";
    },
    filterItems(level) {
      if (level === "all") {
        return this.items;
      } else if (level === "checked") {
        return this.items.filter(x => x.checked);
      } else if (level === "unchecked") {
        return this.items.filter(x => !x.checked);
      }
    },
    setLevel(level) {
      this.level = level;
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
.itemAdder,
span {
  margin: 10px;
}
span {
  border-width: 1px;
  border-color: lightgray;
  padding: 5px;
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
li {
  margin: 10px;
  text-align: left;
}
</style>
