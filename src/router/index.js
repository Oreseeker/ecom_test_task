import Vue from "vue";
import VueRouter from "vue-router";
import Authorization from "../views/Authorization.vue";
import Analytics from "../views/Analytics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Авторизация",
    component: Authorization
  },
  {
    path: "/analytics",
    name: "Аналитика",
    component: Analytics
  }
];

const router = new VueRouter({
  routes
});

export default router;
