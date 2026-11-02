<script setup lang="ts">
export type ToolShot = {
  alt: string
  caption: string
  src: string
}

defineProps<{
  shots: ToolShot[]
}>()
</script>

<template>
  <div class="tool-shots">
    <figure
      v-for="(s, index) in shots"
      :key="s.src"
      class="tool-shot"
      :class="{ 'tool-shot--hero': index === 0 }"
    >
      <a :href="s.src" target="_blank" rel="noopener noreferrer">
        <img :src="s.src" :alt="s.alt" loading="lazy" decoding="async" />
      </a>
      <figcaption>{{ s.caption }}</figcaption>
    </figure>
  </div>
</template>

<style scoped>
.tool-shots {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 20px auto 8px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.tool-shot {
  margin: 0;
}

.tool-shot--hero {
  grid-column: 1 / -1;
}

.tool-shot a {
  display: block;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  line-height: 0;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.tool-shot a:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

.tool-shot img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
}

.tool-shot figcaption {
  margin-top: 8px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  text-align: center;
}
</style>
