<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import SiteFooter from './SiteFooter.vue'

const { Layout: VPLayout } = DefaultTheme
</script>

<template>
  <VPLayout>
    <template #layout-bottom>
      <SiteFooter />
    </template>
  </VPLayout>
</template>
