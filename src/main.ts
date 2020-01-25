// gridsome.org/docs/client-api
import "@/assets/css/global.css";
import { ClientApiConstructor } from "./types";
import Main from "@/layouts/Main.vue";

/** Main Wrapper */
const client: ClientApiConstructor = (Vue, { head }) => {
  // @ts-ignore
  if (process.isClient) {
    console.log("client build");
    // eslint-disable-next-line global-require
    const VModal = require("vue-js-modal").default;
    Vue.use(VModal);
  }
  Vue.component("Layout", Main);
  head.title = "My Awesome Gridsome Project";
};

export default client;
