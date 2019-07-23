<template>
  <div>
    <h1>Welcome</h1>
    <input type="text" placeholder="Type your name here..."/>
    <br/>
    <input type="button" @click="toMain" value="Start"/>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  },
  methods: {
    toMain() {
      this.$router.push("/main");
    }
  }
};
</script>

<style scoped>
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


