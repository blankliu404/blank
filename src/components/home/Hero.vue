<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="hero" v-if="currentLang">
    <div class="hero-content">
      <h1>{{ currentLang.greeting || 'Loading...' }}</h1>
      <!-- <p>{{ currentLang.description || 'Loading...' }}</p> -->
      <a :href="currentLang.githubUrl" class="cta">{{ currentLang.seeWork || 'Loading...' }}</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'

// Inject the translations and language from the root component
const language = inject<{ [key: string]: string }>('language', { value: 'zh' })
const translations = inject<Translations>('translations')

// Safely access current language translations, fallback to empty object if not loaded
const currentLang = computed(() => (translations ? translations[language.value] : {}))
</script>
