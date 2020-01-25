<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img
      :class="`h-64 w-full object-${content.fit?'contain':'cover'} object-center ${content.vid ? 'cursor-pointer' : ''}`"
      :src="content.img"
      :alt="content.title"
      @click="content.vid && $emit('open-modal', content.vid)"
    >
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ content.title }}</div>
      <p class="text-gray-700 text-base">
        {{ content.subtitle }}
      </p>
    </div>
    <div class="px-6 py-4">
      <a
        :href="content.github"
        target="_blank"
        class="inline-block text-gray-900 bg-gray-300 hover:bg-gray-400 rounded-full px-3 py-1 text-sm mr-2"
      >Project Link</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: { },
  props: { content: { type: Object as () => {[key: string]: unknown}, required: true } },
  methods: {},
});
</script>
