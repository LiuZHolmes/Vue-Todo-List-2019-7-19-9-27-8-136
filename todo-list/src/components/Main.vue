<template>
  <div>
    <TodoTitle title="Jquery To Do List" subTitle="Simple Todo List with adding and filter by diff status."/>
    <ToDoList/>
    <filterButton class="filterButton"/>
  </div>
</template>

<script>
import ToDoList from './ToDoList'
import TodoTitle from "./TodoTitle";
import filterButton from "./filterButton";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ToDoList,
    TodoTitle,
    filterButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-style: italic;
}
div {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
