import { defineConfig } from 'vitepress'

// 线上站挂在 /wubi/，GitHub Pages 挂在仓库子路径，本地预览用根路径。
const base = process.env.DOCS_BASE
  || (process.env.GITHUB_ACTIONS ? '/wubi86-rime-macos-ime-docs/' : '/')

export default defineConfig({
  title: '玫枫五笔',
  description: '基于 rime-wubi86-jidian 的五笔输入法：注册与同步、下载，以及各系统上的做法。',
  lang: 'zh-CN',
  base,
  vite: {
    server: {
      // 避开 Vite 默认 5173；preview 用 8765
      port: 8766,
      strictPort: true
    }
  },
  cleanUrls: !process.env.DOCS_BASE,
  // 安装包在 public 里，不是 Markdown 页面。
  ignoreDeadLinks: [/^\/download\//],
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `${base}logo.png`, type: 'image/png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: '玫枫五笔',
    nav: [
      { text: '下载', link: '/download' },
      { text: '桌面端', link: '/desktop' },
      { text: '移动端', link: '/mobile' },
      { text: '痛点解决', link: '/pain' },
      { text: '注册与同步', link: '/guide/lexicon' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '注册与同步',
          items: [
            { text: '词库与同步', link: '/guide/lexicon' },
            { text: '注册与付费', link: '/guide/register' }
          ]
        }
      ]
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '更新于' },
    search: { provider: 'local' },
    footer: false
  }
})
