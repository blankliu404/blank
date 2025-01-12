import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/style.css'

// Native UI
import {
  // component
  NFloatButton,
  NIcon,
  NTooltip,
  NFlex,
  NSlider,
  NGrid,
  NGridItem,
  // create naive ui
  create,
} from 'naive-ui'

const naive = create({
  components: [NFloatButton, NIcon, NTooltip, NFlex, NSlider, NGrid, NGridItem],
})

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(naive)
app.use(pinia)

app.mount('#app')
