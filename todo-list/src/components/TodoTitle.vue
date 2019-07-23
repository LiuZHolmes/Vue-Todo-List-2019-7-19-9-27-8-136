<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{subTitle}}</p>
  </div>
</template>

<script>
export default {
  name: "ToDoTitle",
    props: {
        title: String,
        subTitle: String
    }
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>

