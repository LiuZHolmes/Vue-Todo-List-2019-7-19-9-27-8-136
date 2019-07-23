<template>
  <div>
    <h1>Welcome</h1>
    <input type="text" placeholder="Type your name here..." v-model="username"/>
    <br/>
    <router-link :to="path">Go to main</router-link>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      username:"Hendricks"
    }
  },
  computed: {
    path() {
      return `/main/${this.username}`;
    }
  },
  props: {
    msg: String
  },
  methods: {
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
input[type="text"] {
  font-size: 15px;
  margin-bottom: 10px;
}
input[type="button"] {
  font-size: 20px;
  background-color: #2c3e50;
  color: aliceblue;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-style: none;
  border-radius: 15px;
}
</style>


