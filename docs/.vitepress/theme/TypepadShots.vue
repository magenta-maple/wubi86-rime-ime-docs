<script setup lang="ts">
import ToolShots from './ToolShots.vue'

/** 截图与 typepad README / 版本记录 discussion 一致 */
const shots = [
  {
    alt: '跟打主界面',
    caption: '跟打主界面',
    src: 'https://user-images.githubusercontent.com/12215982/192304108-002676b1-e6b9-4820-8947-25febc223980.png'
  }
]
</script>

<template>
  <ToolShots :shots="shots" />
</template>
