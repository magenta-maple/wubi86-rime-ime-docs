<script setup lang="ts">
type Platform = {
  id: string
  name: string
  summary: string
  href: string
  cta: string
  external?: boolean
  doc: string
  docLabel: string
  releases?: string
  releasesLabel?: string
}

const platforms: Platform[] = [
  {
    id: 'macos',
    name: 'macOS',
    summary: 'macOS 13+ · Apple 芯片与 Intel',
    href: 'https://github.com/KyleBing/wubi86-rime-ime-macos/releases/latest/download/MeifengWubi-macOS.dmg',
    cta: 'MeifengWubi-macOS.dmg',
    external: true,
    doc: 'https://github.com/KyleBing/wubi86-rime-ime-macos',
    docLabel: 'GitHub',
    releases: 'https://github.com/KyleBing/wubi86-rime-ime-macos/releases',
    releasesLabel: '版本记录'
  },
  {
    id: 'windows',
    name: 'Windows',
    summary: 'Windows 10 / 11 · x64',
    href: 'https://github.com/KyleBing/wubi86-rime-ime-windows/releases/latest/download/MeifengWubi-Windows-setup.exe',
    cta: 'MeifengWubi-Windows-setup.exe',
    external: true,
    doc: 'https://github.com/KyleBing/wubi86-rime-ime-windows',
    docLabel: 'GitHub',
    releases: 'https://github.com/KyleBing/wubi86-rime-ime-windows/releases',
    releasesLabel: '版本记录'
  },
  {
    id: 'ios',
    name: 'iOS',
    summary: 'TestFlight 公测 · iOS 16+',
    href: 'https://testflight.apple.com/join/ypJ1C4f9',
    cta: 'TestFlight 加入测试',
    external: true,
    doc: 'https://github.com/KyleBing/wubi86-rime-ime-ios',
    docLabel: 'GitHub',
    releases: 'https://github.com/KyleBing/wubi86-rime-ime-ios/releases',
    releasesLabel: '版本记录'
  },
  {
    id: 'android',
    name: 'Android',
    summary: 'Android 8.0 及以上',
    href: 'https://github.com/KyleBing/wubi86-rime-ime-android/releases/latest/download/MeifengWubi-Android.apk',
    cta: 'MeifengWubi-Android.apk',
    external: true,
    doc: 'https://github.com/KyleBing/wubi86-rime-ime-android',
    docLabel: 'GitHub',
    releases: 'https://github.com/KyleBing/wubi86-rime-ime-android/releases',
    releasesLabel: '版本记录'
  }
]
</script>

<template>
  <div class="download-grid" role="list">
    <article
      v-for="p in platforms"
      :key="p.id"
      class="download-tile"
      :class="`download-tile--${p.id}`"
      role="listitem"
    >
      <div class="tile-head">
        <span class="tile-icon" aria-hidden="true">
          <svg v-if="p.id === 'macos'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <svg v-else-if="p.id === 'windows'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5.5 10.5 4.2V11H3V5.5zm0 7.2h7.5v6.8L3 18.5V12.7zm9-8.3L21 3v7.5h-9V4.4zm0 8.3h9V21l-9-1.6V12.7z" />
          </svg>
          <svg v-else-if="p.id === 'ios'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V4H7zm5 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" />
          </svg>
          <svg v-else-if="p.id === 'android'" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.6 9.48 19.44 6.3c.11-.22.05-.48-.14-.61-.19-.13-.45-.09-.57.12l-1.88 3.24a11.43 11.43 0 0 0-8.74 0L6.33 5.81c-.12-.21-.38-.25-.57-.12-.19.12-.25.38-.14.61l1.84 3.18C4.66 11.75 3 14.82 3 18.25h18c0-3.43-1.66-6.5-3.4-8.77zM7.5 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
        </span>
        <div class="tile-titles">
          <h3 class="tile-name">{{ p.name }}</h3>
          <p class="tile-summary">{{ p.summary }}</p>
        </div>
      </div>

      <a
        class="tile-download"
        :href="p.href"
        :target="p.external ? '_blank' : undefined"
        :rel="p.external ? 'noopener noreferrer' : undefined"
      >
        <span class="tile-download-label">{{ p.id === 'ios' ? '前往' : '下载' }}</span>
        <span class="tile-download-file">{{ p.cta }}</span>
      </a>

      <p class="tile-meta">
        <a
          :href="p.doc"
          target="_blank"
          rel="noopener noreferrer"
        >{{ p.docLabel }}</a>
        <template v-if="p.releases">
          <span class="tile-meta-sep" aria-hidden="true">·</span>
          <a
            :href="p.releases"
            :target="p.releases.startsWith('http') ? '_blank' : undefined"
            :rel="p.releases.startsWith('http') ? 'noopener noreferrer' : undefined"
          >{{ p.releasesLabel }}</a>
        </template>
      </p>
    </article>
  </div>
</template>

<style scoped>
.download-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: 28px 0 32px;
  padding: 0;
  list-style: none;
}

@media (max-width: 640px) {
  .download-grid {
    grid-template-columns: 1fr;
  }
}

.download-tile {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px 18px 16px;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.download-tile:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.tile-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.tile-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  color: #fff;
}

.tile-icon svg {
  width: 26px;
  height: 26px;
}

.download-tile--macos .tile-icon {
  background: linear-gradient(145deg, #555 0%, #1d1d1f 100%);
}

.download-tile--windows .tile-icon {
  background: linear-gradient(145deg, #00a4ef 0%, #0078d4 100%);
}

.download-tile--ios .tile-icon {
  background: linear-gradient(145deg, #ff58e6 0%, #9500ff 100%);
}

.download-tile--android .tile-icon {
  background: linear-gradient(145deg, #3ddc84 0%, #1ea362 100%);
}

.tile-titles {
  min-width: 0;
  padding-top: 2px;
}

.tile-name {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.25;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}

:deep(.vp-doc) .tile-name {
  border-top: none;
  margin-top: 0;
  padding-top: 0;
}

.tile-summary {
  margin: 4px 0 0;
  font-size: 12px;
  line-height: 1.45;
  color: var(--vp-c-text-2);
}

.tile-download {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 12px 14px;
  border-radius: 10px;
  text-decoration: none;
  background: var(--vp-c-brand-1);
  color: #fff;
  transition: background 0.2s, transform 0.15s;
}

.tile-download:hover {
  background: var(--vp-c-brand-2);
  color: #fff;
}

.tile-download:active {
  transform: scale(0.99);
}

.tile-download-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.88;
}

.tile-download-file {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  word-break: break-all;
}

.tile-meta {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}

.tile-meta a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.15s, border-color 0.15s;
}

.tile-meta a:hover {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-soft);
}

.tile-meta-sep {
  margin: 0 0.35em;
  opacity: 0.55;
}
</style>
