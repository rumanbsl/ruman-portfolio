// gridsome.org/docs/client-api
import "@/assets/css/global.css";
import VModal from "vue-js-modal";
import { ClientApiConstructor } from "./types";
import Main from "@/layouts/Main.vue";

/** Main Wrapper */
const client: ClientApiConstructor = (Vue, { head }) => {
  // @ts-ignore
  if (process.isClient) {
    Vue.use(VModal);
  }
  Vue.component("Layout", Main);
  head.title = "My Awesome Gridsome Project";
};

export default client;
