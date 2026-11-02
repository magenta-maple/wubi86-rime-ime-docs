import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import DocImgText from './DocImgText.vue'
import Figure from './Figure.vue'
import TypingDemo from './TypingDemo.vue'
import MacCandidatePreview from './MacCandidatePreview.vue'
import SyncScopeDemo from './SyncScopeDemo.vue'
import DownloadGrid from './DownloadGrid.vue'
import DictEditorShots from './DictEditorShots.vue'
import TypepadShots from './TypepadShots.vue'
import ToolSectionHead from './ToolSectionHead.vue'
import HomeLanding from './HomeLanding.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('DocImgText', DocImgText)
    app.component('Figure', Figure)
    app.component('TypingDemo', TypingDemo)
    app.component('MacCandidatePreview', MacCandidatePreview)
    app.component('SyncScopeDemo', SyncScopeDemo)
    app.component('DownloadGrid', DownloadGrid)
    app.component('DictEditorShots', DictEditorShots)
    app.component('TypepadShots', TypepadShots)
    app.component('ToolSectionHead', ToolSectionHead)
    app.component('HomeLanding', HomeLanding)
  }
}
