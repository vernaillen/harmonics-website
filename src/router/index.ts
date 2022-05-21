import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LandingView from "../views/LandingView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", component: HomeView, meta: { title: "Home" } },
  { path: "/about", meta: { title: "About" }, component: AboutView },
  { path: "/landing", meta: { title: "Landing" }, component: LandingView },
  { path: "/:path(.*)", component: NotFound },
];

export default routes;
