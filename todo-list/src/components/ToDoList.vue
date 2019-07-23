<template>
  <div class="ToDoList">
    <itemAdder></itemAdder>
    <item class="item" v-for="(item, index) in activeItems" :key="item.id" :initItem="item" :index="index"></item>
  </div>
</template>

<script>
import itemAdder from "./itemAdder";
import item from "./item";
export default {
  name: "ToDoList",
  data() {
    return {
      editingItem: null,
      cachedText: ""
    };
  },
  props: {
    msg: String
  },
  computed: {
    activeItems() {
      return this.$store.getters.activeItems;
    }
  },
  components: {
    itemAdder,
    item
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  border-width: 1px;
  border-color: lightgray;
  padding: 5px;
}
.item {
  margin: 10px;
  margin-top: 15px;
  text-align: left;
  margin-left: 80px;
}
</style>
