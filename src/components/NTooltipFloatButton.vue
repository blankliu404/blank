<script setup lang="ts">
import { useRouter } from 'vue-router'

// var
const props = defineProps<{
  tooltipText?: string
  menuRoute?: string
}>()
// withDefaults(
//   defineProps<{
//     tooltipText?: string
//     menuRoute?: string
//   }>(),
// )

const router = useRouter()

// method
const changeRoute = (route: string | undefined) => {
  if (route) {
    router.push(route)
  }
}

// watch
// watchEffect(() => {
//   // 在 3.5 之前只运行一次
//   // 在 3.5+ 中在 "foo" prop 变化时重新执行
//   console.log(foo)
// })
</script>

<template>
  <n-tooltip trigger="hover" placement="right">
    <template #trigger>
      <n-float-button @click="changeRoute(props.menuRoute)">
        <n-icon>
          <slot name="icon"></slot>
        </n-icon>
      </n-float-button>
    </template>
    {{ props.tooltipText }}
  </n-tooltip>
</template>
