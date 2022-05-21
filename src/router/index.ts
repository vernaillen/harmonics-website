import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LandingView from "../views/LandingView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView, meta: { title: "Home" } },
    { path: "/about", meta: { title: "About" }, component: AboutView },
    { path: "/landing", meta: { title: "Landing" }, component: LandingView },
    { path: "/:path(.*)", component: NotFound },
  ],
});

export default router;
