<template>
  <div id="app">
    <Child1 v-if="child1visible" />
    <button @click="child1visible = false">x</button>
    <Child2 v-if="child2visible" />
    <button @click="child2visible = false">x</button>
    <Child3 v-if="child3visible" />
    <button @click="child3visible = false">x</button>
    <Child4 v-if="child4visible" />
    <button @click="child4visible = false">x</button>
    <Child5 v-if="child5visible" />
    <button @click="child5visible = false">x</button>
  </div>
</template>

<script>
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
import Child3 from "./components/Child3.vue";
import Child4 from "./components/Child4.vue";
import Child5 from "./components/Child5.vue";
export default {
  name: "App",
  data() {
    return {
      child1visible: true,
      child2visible: true,
      child3visible: true,
      child4visible: true,
      child5visible: true,
    };
  },
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
