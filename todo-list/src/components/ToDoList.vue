
<template>
  <div>
    <input class="itemAdder" v-model="newItem">
    <input type="button" value="Add" v-on:click="addItem">
    <ol>
      <li v-for="item in filteredItems" :key="item.id">
      <input type="checkbox" v-model="item.checked">
      <span>{{item.text}}</span>
      </li>
    </ol>
    <span v-on:click="setLevel('all')">ALL</span>
    <span v-on:click="setLevel('unchecked')">Active</span>
    <span v-on:click="setLevel('checked')">Complete</span>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      level: "all",
      items: [
        {
          text: "Hello world",
          checked: false
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
          checked: false 
        });
      this.newItem = "";
      alert(this.items.length());
    },
    filterItems(level) {
      if (level === "all") {
        return this.items;
      }
      else if (level === "checked") {
        return this.items.filter(x => x.checked);
      }
      else if (level === "unchecked") {
        return this.items.filter(x => !x.checked);
      }
    },
    setLevel(level) {
      this.level = level;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemAdder,span {
  margin: 10px;
}
</style>
