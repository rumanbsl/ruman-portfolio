<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img class="h-64 w-full object-cover object-center" :src="img" :alt="title">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ subtitle }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: { },
  props: {
    img: {
      type: String as () => string,
      required: true,
    },
    vid: {
      type: String as () => string,
      required: true,
    },
    title: {
      type: String as () => string,
      required: true,
    },
    subtitle: {
      type: String as () => string,
      required: true,
    },
  },
  methods: {},
});
</script>
