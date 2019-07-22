<template>
  <div>
    <span :style="{'border-style' : this.level === 'all' ? 'solid' : 'none'}" v-on:click="changeLevel('all')">ALL</span>
    <span :style="{'border-style' : this.level === 'unchecked' ? 'solid' : 'none'}" v-on:click="changeLevel('unchecked')">Active</span>
    <span :style="{'border-style' : this.level === 'checked' ? 'solid' : 'none'}" v-on:click="changeLevel('checked')">Complete</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    initLevel: String
  },
  data() {
      return {
        level: this.initLevel
      }
  },
  methods: {
    changeLevel(level) {
      this.level = level;
      this.$emit('changeLevel',level);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  border-width: 1px;
  border-color: lightgray;
  padding: 5px;
  margin: 10px;
}
</style>
