import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../components/Welcome.vue";
import Main from "../components/Main.vue";
import Setting from "../components/Setting.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Welcome },
  { path: "/main/:username", component: Main },
  { path: "/:username/my", component: Setting }
];
export default new VueRouter({
  routes
});
