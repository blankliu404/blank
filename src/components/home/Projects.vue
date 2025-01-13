<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="projects" class="projects" v-if="currentLang">
    <h2>{{ currentLang.projects || 'Loading...' }}</h2>
    <div class="project-list">
      <div v-for="project in projects" :key="project.name" class="project-card">
        <h3>{{ project.name }}</h3>
        <p>{{ currentLang[project.description] }}</p>
        <a :href="project.githubLink" target="_blank" class="project-link">{{
          currentLang.viewOnGitHub || 'Loading...'
        }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'

// Inject the translations and language from the root component
const language = inject<{ [key: string]: string }>('language', { value: 'zh' })
const translations = inject<Translations>('translations')
const projectsV = inject<Project[][]>('projects')

// Get the current language translations
const currentLang = computed(() => translations?.[language.value] || {})
const projects = computed(() => {
  return projectsV ? projectsV[0] : []
})

// const pattern = new RegExp('^<a href=".*" itemprop="name codeRepository">.*</a>$')
// const prefix = '<a href="'

// try {
//   fetch('https://github.com/blankliu404?tab=repositories').then((res) => {
//     console.log(JSON.stringify(res))

//     const arr = pattern.exec(JSON.stringify(res))
//     console.log(arr)

//     if (arr) {
//       for (const a in arr) {
//         let aStr = JSON.stringify(a)
//         aStr = aStr.substring(aStr.indexOf(prefix))
//         projects.value.push({
//           name: aStr.substring(aStr.indexOf('>') + 1, aStr.lastIndexOf('<')),
//           githubLink: aStr.substring(0, aStr.indexOf('"')),
//         })
//       }
//     }

//     console.log(projects)
//   })
// } catch (e) {
//   console.log(e)
// }
</script>
