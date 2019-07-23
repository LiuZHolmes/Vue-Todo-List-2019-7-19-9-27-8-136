import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../components/Welcome.vue";
import Main from "../components/Main.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Welcome },
  { path: "/main", component: Main }
];
export default new VueRouter({
  routes
});
