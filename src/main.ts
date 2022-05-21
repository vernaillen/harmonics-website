import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import MarkdownWrapper from "@/components/MarkdownWrapper.vue";
import routes from "~pages";
import "virtual:windi-devtools";
import "virtual:windi.css";
import "./main.css";

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

export const createApp = ViteSSG(App, { routes }, ({ app, router }) => {
  app.component("FontAwesomeIcon", FontAwesomeIcon);
  app.component("markdown-wrapper", MarkdownWrapper);
  app.use(router);
});
