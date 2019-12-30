<template>
  <section class="pt-8 mx-auto text-justify" style="max-width: 550px;">
    <div>
      <h2>Experience</h2>
      <p class="mt-4 text-xl leading-tight tracking-tighter">
        <span class="uppercase">Company</span>: Feedbackly Oy,  Helsinki
        <br>
        July 2017 - Present
      </p>
      <div class="my-4">
        I work with these technologies on a daily basis:
        <dl>
          <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">Backend:</span> Express JS</dd>
          <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">Database:</span> MongoDB</dd>
          <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">FrontEnd:</span> Vue, Vuex</dd>
          <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">Test Utils:</span> Jest for Unit testing, and Cypress for E2E</dd>
          <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">Languages:</span> TypeScript/ES6.</dd>
          <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">Deployments:</span> Kubernetes & Google cloud platform</dd>
        </dl>
      </div>
    </div>
    <div class="border-t border-gray-100 pt-2">
      <h2>Skills</h2>
      <dl class="my-4">
        <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">Programming Languages:</span> JavaScript, Rust</dd>
        <dd class="mt-3">
          <span class="text-gray-900 bg-gray-300 p-2 rounded">JS libraries & Frameworks:</span>
          ReactJS, VueJS, AngularJS 1.5,<br> JQuery, PhoneGap/Cordova, NodeJS, ExpressJS, NativeScript-Vue
        </dd>
        <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">DB:</span> Mongoose, MySQL</dd>
        <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">Build Tools :</span> Webpack, GulpJS</dd>
        <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">Langage:</span> TypeScript/ES6.</dd>
        <dd class="mt-3"><span class="text-gray-900 bg-gray-300 p-2 rounded">Design Tools :</span> Figma</dd>
      </dl>
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
