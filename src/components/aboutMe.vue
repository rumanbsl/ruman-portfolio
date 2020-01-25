<template>
  <section class="py-6 mx-auto text-justify" style="max-width: 550px;">
    <div>
      <g-image src="@/assets/images/ruman-pixel.png" class="rounded-full w-32 block mx-auto" />
      <h2 class="mt-3">Hello, I am <span class="text-gray-900 bg-gray-300 p-2 rounded">Majedul Hoque</span>.</h2>
      <h2>I am a full-stack web developer.</h2>
      <p class="mt-8 text-xl leading-tight tracking-tighter">
        I was born in Dhaka, Bangladesh.
        Currently I am based in Helsinki, Finland.
        I have {{ yearsOfExperience }} years of experience in web development.
        <br>
      </p>
    </div>
    <div class="mx-auto ml-2 mt-1 mr-2 inline-block cursor-pointer" @click="()=>goTo('github')"><Github /></div>
    <div class="mx-auto ml-2 mt-1 mr-2 inline-block cursor-pointer" @click="()=>goTo()"><Linkedin /></div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Github from "./icons/github.vue";
import Linkedin from "./icons/linkedin.vue";

export default Vue.extend({
  components: { Github, Linkedin },
  computed: {
    yearsOfExperience(): number {
      return (new Date()).getFullYear() - 2015;
    },
  },
  methods: {
    goTo(site: string) {
      const url = site === "github" ? "https://github.com/rumanbsl" : "https://www.linkedin.com/in/rumanhuq/";
      if (window) window.open(url);
    },
  },
});
</script>
