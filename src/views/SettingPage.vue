<template>
  <n-flex vertical>
    <div>菜单位置</div>
    <n-grid :x-gap="12" :y-gap="8" :cols="12">
      <n-grid-item style="text-align: right"> 靠左 </n-grid-item>
      <n-grid-item :span="3">
        <n-slider v-model:value="menuLeftValue" :step="1" :max="aW" :min="0" :tooltip="false" />
      </n-grid-item>
      <n-grid-item style="text-align: left"> 靠右 </n-grid-item>
      <n-grid-item style="text-align: right"> 靠上 </n-grid-item>
      <n-grid-item :span="3">
        <n-slider v-model:value="menuRightVaue" :step="1" :max="aH" :min="0" :tooltip="false" />
      </n-grid-item>
      <n-grid-item> 靠下 </n-grid-item>
    </n-grid>
  </n-flex>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const aH = window.screen.availHeight
const aW = window.screen.availWidth

const menuLeftValue = ref()
watch(menuLeftValue, (val) => {
  if (val > aW / 2) {
    console.log('right', aW - val)
  } else {
    console.log('left', val)
  }
})
const menuRightVaue = ref()
watch(menuRightVaue, (val) => {
  if (val > aH / 2) {
    console.log('bottom', aH - val)
  } else {
    console.log('top', val)
  }
})
</script>
