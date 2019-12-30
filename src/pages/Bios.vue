<template>
  <Layout class="bios flex  flex-col justify-between h-screen">
    <header class="text-2xl text-center h-15 bg-gray-800">90's Kids will Remember this(tm) CMOS Setup Utility</header>
    <main class="h-full">
      <ul class="flex text-xl bg-blue-800">
        <li v-for="(nav, n) in navigation" :key="n" :class="['p-5', nav.active ? 'bg-gray-400 text-blue-800' : ''].filter(Boolean)">{{ nav.label }}</li>
      </ul>
      <Component :is="activeComponent" />
    </main>
    <footer class="text-xl text-center h-15 bg-gray-800">footer lists</footer>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import AboutMe from "../components/aboutMe.vue";
import Skills from "../components/skills.vue";
import Downloadables from "../components/downloadables.vue";
import Contact from "../components/contact.vue";
import Blogs from "../components/blogs.vue";

export default Vue.extend({
  data: () => ({
    navigation: [
      { active: false, label: "About Me" },
      { active: false, label: "Skills" },
      { active: false, label: "Downloadables" },
      { active: false, label: "Contact" },
      { active: false, label: "Blogs" },
    ],
    activeTab: 0,
  }),
  computed: {
    activeComponent() {
      // console.log(this.activeTab);
      switch (this.activeTab) {
        case 0: return AboutMe;
        case 1: return Skills;
        case 2: return Downloadables;
        case 3: return Contact;
        case 4: return Blogs;
        default: return AboutMe;
      }
    },
  },
  mounted() {
    this.navigation[this.activeTab].active = true;
    window.addEventListener("keydown", e => {
      const activeIndex = this.navigation.findIndex(nav => nav.active);
      if (e.keyCode === 37 && activeIndex !== 0) /* left */ {
        this.navigation[activeIndex].active = false;
        this.navigation[activeIndex - 1].active = true;
        this.activeTab = this.navigation.findIndex(nav => nav.active);
      } else if (e.keyCode === 39 && activeIndex !== this.navigation.length - 1) /* right */ {
        this.navigation[activeIndex].active = false;
        this.navigation[activeIndex + 1].active = true;
        this.activeTab = this.navigation.findIndex(nav => nav.active);
      // top
      } else if (e.keyCode === 38) /* top */ {
        console.log("top");
      // bottom
      } else if (e.keyCode === 40) /* bottom */ {
        console.log("bottom");
      }
    });
  },
});
</script>
