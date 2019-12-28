<template>
  <div class="main p-5">
    We will work here
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    hello() {
      console.log("bruh");
    },
  },
};
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style lang="scss">
.main {
  display:flex;
  border: 1px solid red;
}
</style>
