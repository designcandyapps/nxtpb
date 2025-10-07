<template>
  <div class="flex md:flex-row flex-col space-y-3">
    <TechnologyGridItems
      title="Languages"
      :technology-data="languageList"
    />
    <TechnologyGridItems
      title="Frameworks"
      :technology-data="frameworkList"
    />
    <TechnologyGridItems
      title="Softwares / Services"
      :technology-data="softwareList"
    />
  </div>
</template>

<script lang="ts" setup>
import type FrameworkListInterface from '~/../types/FrameworkListInterface'

const languageList: FrameworkListInterface[] = [
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
  },
  {
    name: 'Python',
    icon: 'logos:python',
  },
  {
    name: 'HTML',
    icon: 'logos:html-5',
  },
  {
    name: 'CSS',
    icon: 'logos:css-3',
  },
]

const frameworkList: FrameworkListInterface[] = [
  {
    name: 'VueJS',
    icon: 'logos:vue',
  },
  {
    name: 'Angular',
    icon: 'logos:angular-icon',
  },
  {
    name: 'Nuxt',
    icon: 'logos:nuxt-icon',
  },
  {
    name: 'TailwindCSS',
    icon: 'logos:tailwindcss-icon',
  },
  {
    name: 'Ionic',
    icon: 'logos:ionic-icon',
  },
]

const softwareList: FrameworkListInterface[] = [
  {
    name: 'Visual Studio Code',
    icon: 'logos:visual-studio-code',
  },
  {
    name: 'GitHub',
    icon: 'logos:github-icon',
  },
  {
    name: 'Firebase',
    icon: 'logos:firebase',
  },
]
</script>
