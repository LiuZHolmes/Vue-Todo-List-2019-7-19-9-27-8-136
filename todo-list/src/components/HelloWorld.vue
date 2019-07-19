<template>
  <div>
    <h1>Jquery To Do List</h1>
    <p>Simple Todo List with adding and filter by diff status.</p>
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoList from './ToDoList.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ToDoList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-style: italic;
}
</style>
