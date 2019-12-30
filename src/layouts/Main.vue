<template>
  <main>
    <slot />
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: { ola(): string { this.hello(); return ""; } },
  methods: {
    hello() {
      console.log("bruh");
    },
  },
});
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>
