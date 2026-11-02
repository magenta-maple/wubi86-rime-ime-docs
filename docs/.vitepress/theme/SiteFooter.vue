<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter } = useData()
const isHome = computed(() => frontmatter.value.layout === 'home')

const links = [
  { label: 'rime-wubi86-jidian', href: 'https://github.com/KyleBing/rime-wubi86-jidian', hint: '五笔方案' },
  { label: 'librime', href: 'https://github.com/rime/librime', hint: '输入引擎' },
  { label: 'kylebing@163.com', href: 'mailto:kylebing@163.com' },
  { label: 'QQ 群 1064664481', href: 'https://qm.qq.com/q/diB60IDijm' }
]
</script>

<template>
  <footer v-if="frontmatter.footer !== false" class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__cluster">
        <div v-if="!isHome" class="site-footer__brand">
          <img class="site-footer__logo" :src="withBase('/logo.png')" width="32" height="32" alt="" />
          <span class="site-footer__name">玫枫五笔</span>
        </div>

        <nav class="site-footer__nav" aria-label="相关链接">
          <ul class="site-footer__links">
            <li v-for="item in links" :key="item.href">
              <a
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
                :title="'hint' in item ? item.hint : undefined"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>

        <p class="site-footer__copy">
          © {{ new Date().getFullYear() }}<template v-if="!isHome"> 玫枫五笔</template>
        </p>
      </div>
    </div>
  </footer>
</template>
