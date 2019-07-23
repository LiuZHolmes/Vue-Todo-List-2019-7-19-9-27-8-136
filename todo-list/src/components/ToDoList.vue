<template>
  <div class="ToDoList">
    <itemAdder></itemAdder>
    <item class="item" v-for="(item, index) in items" :key="index" :initItem="item" :index="index"></item>
    <filterButton class="filterButton"></filterButton>
  </div>
</template>

<script>
import filterButton from "./filterButton";
import itemAdder from "./itemAdder";
import item from "./item";
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
  },
  components: {
    filterButton,
    itemAdder,
    item
  },
  methods: {
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
.filterButton {
  margin-top: 20px;
}
.item {
  margin: 10px;
  margin-top: 15px;
  text-align: left;
  margin-left: 80px;
}
</style>
