<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <n-tooltip trigger="hover" placement="right">
    <template #trigger>
      <n-float-button :right="50" :bottom="50" menu-trigger="hover" type="primary">
        <n-icon>
          <MenuIcon />
        </n-icon>
        <template #menu>
          <!-- <n-tooltip-float-button tooltip-text="设置" menu-route="/settings">
            <template #icon>
              <settings-icon />
            </template>
          </n-tooltip-float-button> -->
          <n-tooltip-float-button tooltip-text="主页" menu-route="/">
            <template #icon>
              <home-icon />
            </template>
          </n-tooltip-float-button>
        </template>
      </n-float-button>
    </template>
    菜单
  </n-tooltip>
</template>

<script lang="ts">
import { Menu as MenuIcon, Home as HomeIcon, Settings as SettingsIcon } from '@vicons/ionicons5'
import NTooltipFloatButton from './components/NTooltipFloatButton.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    MenuIcon,
    HomeIcon,
    SettingsIcon,
    NTooltipFloatButton,
  },
})
</script>

<style scoped></style>
