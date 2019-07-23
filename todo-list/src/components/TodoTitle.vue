<template>
  <div>
    <h1>Jquery To Do List</h1>
    <p>Simple Todo List with adding and filter by diff status.</p>
    <ToDoList></ToDoList>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        subTitle: String
    }
}
</script>
