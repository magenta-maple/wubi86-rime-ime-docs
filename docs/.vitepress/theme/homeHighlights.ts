export type HighlightSeg = { text: string; code: string }

export type HighlightFeature = {
  title: string
  desc: string
  href: string
}

export const HIGHLIGHT_FEATURES: HighlightFeature[] = [
  {
    title: '快捷添加自造词',
    desc: '不抢当前软件前台',
    href: '/pain'
  },
  {
    title: '候选排序',
    desc: '同码词条拖动改序',
    href: '/pain'
  },
  {
    title: '用户词同步',
    desc: '改词自动云端合并',
    href: '/guide/lexicon'
  },
  {
    title: '各平台同步',
    desc: '各端登录同一账号',
    href: '/guide/lexicon'
  },
  {
    title: '专注五笔输入',
    desc: '只做五笔不做拼音',
    href: '/download'
  }
]

/** 极点五笔86 词组/单字编码（与 wubi86_jidian 一致） */
export const HIGHLIGHT_LINES: HighlightSeg[][] = [
  [
    { text: '快捷', code: 'nnrg' },
    { text: '添加', code: 'iglk' },
    { text: '自造词', code: 'tfyn' }
  ],
  [
    { text: '候选', code: 'whtf' },
    { text: '排序', code: 'rdyc' }
  ],
  [
    { text: '用户词', code: 'eyyn' },
    { text: '同步', code: 'mghi' }
  ],
  [
    { text: '各', code: 'tkf' },
    { text: '平台', code: 'guck' },
    { text: '同步', code: 'mghi' }
  ],
  [
    { text: '专注', code: 'fniy' },
    { text: '五笔', code: 'ggtt' },
    { text: '输入', code: 'lwty' }
  ]
]
