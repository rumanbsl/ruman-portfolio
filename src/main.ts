// gridsome.org/docs/client-api
import "@/assets/css/global.css";
import { ClientApiConstructor } from "./types";
import Main from "@/layouts/Main.vue";

/** Main Wrapper */
const client: ClientApiConstructor = (Vue, { head }) => {
  Vue.component("Layout", Main);
  head.title = "My Awesome Gridsome Project";
};

export default client;
