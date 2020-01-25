<template>
  <Layout class="bios">
    <header class="md:fixed w-full">
      <p class="text-2xl text-center bg-gray-800 p-1">90's Kids will Remember this(tm) CMOS Setup Utility</p>
      <ul class="flex text-xl bg-blue-800">
        <li
          v-for="(nav, n) in navigation"
          :key="n"
          :class="['p-5 cursor-pointer', nav.active ? 'bg-gray-400 text-blue-800 rounded-t-sm' : ''].filter(Boolean)"
          @click="navigate(n)"
        >
          {{ nav.label }}
        </li>
      </ul>
    </header>
    <main :class="`bg-gray-400 text-blue-800 px-8 md:py-32 sm:py-16`">
      <Component :is="activeComponent" />
    </main>
    <footer class="bottom-0 fixed w-full hidden md:flex text-xl text-center h-15 bg-gray-800 flex items-center p-3">
      <Left class="mr-1" />
      <Right />
      <p class="ml-2">Select Menu</p>
    </footer>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import AboutMe from "../components/aboutMe.vue";
import Skills from "../components/skills.vue";
import Projects from "../components/projects.vue";
import Left from "../components/icons/left-arrow.vue";
import Right from "../components/icons/right-arrow.vue";

export default Vue.extend({
  components: { Left, Right },
  data: () => ({
    navigation: [
      { active: false, label: "About Me" },
      { active: false, label: "Experience & Skills" },
      { active: false, label: "Projects" },
    ],
    activeTab: 0,
  }),
  computed: {
    activeComponent() {
      switch (this.activeTab) {
        case 0: return AboutMe;
        case 1: return Skills;
        case 2: return Projects;
        default: return AboutMe;
      }
    },
  },
  destroyed() {
    document.body.style.backgroundColor = "#000";
  },
  mounted() {
    document.body.style.backgroundColor = "#cbd5e0";
    // document.body.style.cursor = "none";
    this.navigation[this.activeTab].active = true;
    if (window) {
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
        }
      });
    }
  },
  methods: {
    navigate(tab: number) {
      const activeIndex = this.navigation.findIndex(nav => nav.active);
      this.navigation[activeIndex].active = false;
      this.navigation[tab].active = true;
      this.activeTab = this.navigation.findIndex(nav => nav.active);
    },
  },
});
</script>

<style scoped>
.header {
  position: fixed;
}

.main {
  border: 1px solid #f00;
  max-height: 800px;
}
</style>
