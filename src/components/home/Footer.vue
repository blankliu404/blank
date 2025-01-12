<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer" v-if="currentLang">
    <p>&copy; {{ year }} {{ currentLang.name }}</p>
    <div class="social-links">
      <a :href="currentLang.githubUrl" target="_blank">{{
        currentLang.viewOnGitHub || 'Loading...'
      }}</a>
      <a :href="currentLang.csdnUrl" target="_blank">{{
        currentLang.viewOnCSDN || 'Loading...'
      }}</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { inject, computed, ref } from 'vue'

const year = ref(new Date().getFullYear())

// Inject the translations and language from the root component
const language = inject<{ [key: string]: string }>('language', { value: 'zh' })
const translations = inject<Translations>('translations')

// Get the current language translations
const currentLang = computed(() => (translations ? translations[language.value] : {}))
</script>
