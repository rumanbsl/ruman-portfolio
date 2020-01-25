<template>
  <section>
    <div class="py-8">
      <h2 class="sm:text-center md:text-left">Arduino Projects</h2>
      <div class="md:flex mt-4">
        <Card
          v-for="(content, key) in arduinoContents"
          :key="key"
          class="mx-auto mb-8 lg:m-0 lg:mr-16"
          :content="content"
          @open-modal="show"
        />
      </div>
    </div>
    <div class="py-8">
      <h2 class="sm:text-center md:text-left">Other Projects</h2>
      <div class="md:flex mt-4">
        <Card
          v-for="(content, key) in otherContents"
          :key="key"
          class="mx-auto mb-8 lg:m-0 lg:mr-16"
          :content="content"
        />
      </div>
    </div>
    <Modal name="video-player">
      <video class="h-full w-full object-fit" autoplay controls>
        <source :src="activeVid" type="video/mp4">
        Your browser does not mp4 video.
      </video>
    </Modal>
  </section>
</template>

<script lang="ts">
/* eslint-disable global-require */
import Vue from "vue";
import Card from "./card.vue";

export default Vue.extend({
  components: { Card },
  data: () => ({
    activeVid: "",
    arduinoContents: [
      {
        img: require("@/assets/images/thumbnail_1.png"),
        vid: "/vid_1.mp4",
        title: "Light sensor",
        subtitle: "This uses JohnnyFive framework. Arduino photoresistor is used to get light sensivity around LED",
        github: "https://github.com/rumanbsl/arduino-node",
      },
      {
        img: require("@/assets/images/thumbnail_2.jpg"),
        vid: "/vid_2.mp4",
        title: "Dancing LED",
        subtitle: "Another JohnnyFive project. Event loop is the main mechanism behind the sequential toggle of light on/off",
        github: "https://github.com/rumanbsl/arduino-node",
      },
    ],
    otherContents: [
      {
        img: require("@/assets/images/mixed-logos.png"),
        title: "Monorepo",
        subtitle: `Cultivation of what stack I know so far. A massive Docker boilerplate template consisting
        rust, typescript, VueJS, ExpressJS, tide-rs, graphQL, and traefik(load-balancing).`,
        github: "https://github.com/rumanbsl/monorepo-blog",
        fit: true,
      },
      {
        img: require("@/assets/images/npm-logo.png"),
        title: "Vue P5 component",
        subtitle: "Vue P5 component with typescript definitions. I published this library in NPM almost a year ago",
        github: "https://www.npmjs.com/package/vue-p5-component",
        fit: true,
      },
    ],
  }),
  methods: {
    show(vid: string) {
      this.activeVid = vid;
      // @ts-ignore
      this.$modal.show("video-player");
    },
    hide() {
      this.activeVid = "";
      // @ts-ignore
      this.$modal.hide("video-player");
    },
  },
});
</script>
