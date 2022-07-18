import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import MarkdownWrapper from "@/components/MarkdownWrapper.vue";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";
import routes from "~pages";
import "virtual:windi-devtools";
import "virtual:windi.css";
import "@/css/markdown.css";
import "@/css/main.css";
import "@/css/prose.css";

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

function formatDate(d: string) {
  const date = dayjs(d);
  return date.format("D MMM YYYY");
}
dayjs.extend(LocalizedFormat);

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.component("FontAwesomeIcon", FontAwesomeIcon);
  app.component("markdown-wrapper", MarkdownWrapper);
  app.config.globalProperties.$formatDate = formatDate;
});
