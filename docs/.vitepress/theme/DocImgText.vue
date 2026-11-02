<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
}>()
</script>

<template>
  <div class="doc-img-text">
    <div class="doc-img-text__media">
      <slot name="media">
        <img v-if="src" :src="src" :alt="alt ?? ''" width="300" />
      </slot>
    </div>
    <div v-if="$slots.default" class="doc-img-text__body">
      <slot />
    </div>
  </div>
</template>
