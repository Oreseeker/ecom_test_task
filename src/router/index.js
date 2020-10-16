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
    component: Analytics,
    beforeEnter: (to, from, next) => {
      if (!window.localStorage['leadhit-site-id']) {
        alert("В начале укажите ID сайта! Перенаправляю на страницу авторизации.");
        next({name: "Авторизация"});
      }
      else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
