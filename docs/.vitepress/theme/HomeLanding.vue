<script setup lang="ts">
import { withBase } from 'vitepress'
import { HIGHLIGHT_FEATURES } from './homeHighlights'

const HERO_GIF = 'http://diary-container.kylebing.cn/FpZU3V3gagEiApWMwJEwPuzWgwuB'
</script>

<template>
  <div class="home-landing">
    <figure class="home-landing__hero">
      <img
        class="home-landing__gif"
        :src="HERO_GIF"
        alt="玫枫五笔输入法"
        width="1103"
        height="469"
      />
      <figcaption class="home-landing__badge">
        <img
          class="home-landing__badge-logo"
          :src="withBase('/logo.png')"
          width="28"
          height="28"
          alt=""
        />
        <span class="home-landing__badge-name">玫枫五笔</span>
      </figcaption>
    </figure>

    <nav class="home-landing__features" aria-label="功能说明">
      <a
        v-for="item in HIGHLIGHT_FEATURES"
        :key="item.title"
        class="home-landing__feature"
        :href="withBase(item.href)"
      >
        <span class="home-landing__feature-title">{{ item.title }}</span>
        <span class="home-landing__feature-desc">{{ item.desc }}</span>
      </a>
    </nav>
  </div>
</template>
