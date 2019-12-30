<template>
  <section class="text-center py-16">
    <g-image src="@/assets/images/ruman-pixel.png" class="rounded-full w-32 block mx-auto" />
    <div class="p-4 mx-auto text-justify" style="max-width: 600px;">
      <h2>Hello, I am <span class="text-gray-900 bg-gray-300 p-2 rounded">Majedul Hoque</span>.</h2>
      <h2>I am a full-stack web developer</h2>
      <p class="mt-8 text-xl leading-tight tracking-tighter">
        I was born in Dhaka, Bangladesh.
        Currently I am based in Helsinki, Finland.
        I have {{ yearsOfExperience }} years of experience in web development.
        <br>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    yearsOfExperience(): number {
      return (new Date()).getFullYear() - 2015;
    },
  },
});
</script>
