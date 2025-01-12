<template>
  <div id="app">
    <!-- Controls for language and theme toggle -->
    <div class="controls">
      <button class="theme-toggle" @click="toggleTheme">{{ isDarkMode ? 'Light' : 'Dark' }} Mode</button>
      <select v-model="language" @change="changeLanguage" class="language-select">
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>

    <div v-if="isLoading">Loading translations...</div>

    <Hero v-if="!isLoading" />
    <!-- <GithubStats v-if="!isLoading" /> -->
    <Projects v-if="!isLoading" />
    <About v-if="!isLoading" />
    <Footer v-if="!isLoading" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, provide } from 'vue';
import Hero from '../components/home/Hero.vue';
import About from '../components/home/About.vue';
import Projects from '../components/home/Projects.vue';
import Footer from '../components/home/Footer.vue';
// import GithubStats from './components/GithubStats.vue';

// Language and theme state
const language = ref('en');
const isDarkMode = ref(false);

const translations = reactive<Translations>({
  en: null,
  zh: null,
});
const isLoading = ref(true);

// Load translations dynamically
const loadTranslations = async (lang: string) => {
  try {
    const langModule = await import(`../assets/lang/${lang}.json`);
    translations[lang] = langModule.default;
    isLoading.value = false;
  } catch (error) {
    console.error("Error loading translations:", error);
    isLoading.value = false;
  }
};

// Initially load English translations
loadTranslations(language.value);

// Provide language and translations to all child components
provide('language', language);
provide('translations', translations);

// Change language handler
const changeLanguage = async () => {
  isLoading.value = true; // Show loading state
  await loadTranslations(language.value);
};

// Theme toggle handler
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};
</script>
