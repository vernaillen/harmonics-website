import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faBars,
  faChildReaching,
  faDrum,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faArrowRight,
  faBars,
  faChildReaching,
  faDrum,
  faMusic,
  faFacebook,
  faInstagram
);

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
