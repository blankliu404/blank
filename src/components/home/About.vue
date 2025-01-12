<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="about" class="about">
    <h2>{{ currentLang?.aboutTitle || 'About Me' }}</h2>
    <p>{{ currentLang?.aboutDescription || 'Loading...' }}</p>
    <!-- <div class="about-image">
      <img src="./assets/about-image.jpg" alt="About image" />
    </div> -->
  </section>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';

// Inject the translations and language from the root component
const language = inject<{[key: string]: string}>('language', { value: 'zh' });
const translations = inject<Translations>('translations');

// Safely access current language translations, fallback to empty object if not loaded
const currentLang = computed(() => (translations ? translations[language.value] : {}));
</script>
