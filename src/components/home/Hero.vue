<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="hero" v-if="currentLang">
    <div class="hero-content">
      <h1>{{ currentLang.greeting || 'Loading...' }}</h1>
      <!-- <p>{{ currentLang.description || 'Loading...' }}</p> -->
      <a :href="currentLang.csdnUrl" class="cta">{{ currentLang.seeMyTopic || 'Loading...' }}</a>
      &emsp;
      <a :href="currentLang.githubUrl" class="cta">{{ currentLang.seeWork || 'Loading...' }}</a>
      &emsp;
      <n-popover trigger="click" :show-arrow="false">
        <template #trigger>
          <a href="javascript:;" class="cta">{{ currentLang.helpMe || 'Loading...' }}</a>
        </template>
        <n-image width="100" :src="image" :show-toolbar="false" :title="currentLang.titlePop" />
      </n-popover>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'

// Inject the translations and language from the root component
const language = inject<{ [key: string]: string }>('language', { value: 'zh' })
const translations = inject<Translations>('translations')
import image from '../../assets/image/wechat.jpg'

// Safely access current language translations, fallback to empty object if not loaded
const currentLang = computed(() => (translations ? translations[language.value] : {}))
</script>
