<script setup lang="ts">
import ToolShots from './ToolShots.vue'

/** 截图 URL 与 wubi-dict-editor README「一、界面截图」一致 */
const shots = [
  {
    alt: '主界面',
    caption: '主界面',
    src: 'https://user-images.githubusercontent.com/12215982/208109387-5062a921-8eef-4063-9936-42762197d6c8.png'
  }
]
</script>

<template>
  <ToolShots :shots="shots" />
</template>
