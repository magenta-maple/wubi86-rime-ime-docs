<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  title: string
  logo: string
}>()

const logoSrc = computed(() =>
  /^https?:\/\//.test(props.logo) ? props.logo : withBase(props.logo)
)
</script>

<template>
  <div class="tool-section-head">
    <img
      class="tool-section-head__logo"
      :src="logoSrc"
      :alt="title"
      loading="lazy"
      decoding="async"
    />
    <h2 class="tool-section-head__title">{{ title }}</h2>
  </div>
</template>

<style scoped>
.tool-section-head__logo {
  flex-shrink: 0;
  display: block;
  height: calc(1em + 20px);
  width: auto;
  max-width: none;
  border-radius: 6px;
  object-fit: contain;
}
</style>
