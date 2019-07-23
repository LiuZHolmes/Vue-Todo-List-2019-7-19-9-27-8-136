<template>
  <div>
    <el-button class="el-button" round>Back</el-button>
    <TodoTitle :title="title" subTitle="Simple Todo List with adding and filter by diff status."/>
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
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
    title() {
      return `${this.username}'s To Do List`;
    }
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
:not(.el-button){
  text-align: center;
}
.el-button {
  text-align: left;
}
</style>
