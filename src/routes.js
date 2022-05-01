import Home from "./views/HomeView.vue";
import About from "./views/AboutView.vue";
import Landing from "./views/LandingView.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  { path: "/about", meta: { title: "About" }, component: About },
  { path: "/landing", meta: { title: "Landing" }, component: Landing },
  { path: "/:path(.*)", component: NotFound },
];
