<template>
  <div class="py-8">
    <h2>Arduino Projects</h2>
    <div class="md:flex mt-4">
      <Card
        v-for="(content, key) in contents"
        :key="key"
        class="mx-auto mb-8 lg:m-0 lg:mr-16 cursor-pointer"
        :img="content.img"
        :vid="content.vid"
        :title="content.title"
        :subtitle="content.subtitle"
      />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable global-require */
import Vue from "vue";
import Card from "./card.vue";

export default Vue.extend({
  components: { Card },
  data: () => ({
    contents: [
      {
        img: require("@/assets/images/thumbnail_1.jpg"),
        vid: "/vid_1.mp4",
        title: "In my spare time I like to hack arduino devices. With the help JohnnyfiveJS I have learned a thing or two about embedded systems",
        subtitle: "Blinky",
      },
      { img: require("@/assets/images/thumbnail_2.jpg"), vid: "/vid_2.mp4", title: "Arduino light sensor", subtitle: "Light light" },
    ],
  }),
});
</script>
