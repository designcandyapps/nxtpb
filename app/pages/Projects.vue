<template>
  <div>
    <PageHeader
      :title="$t('project.title')"
      :description="$t('project.subtitle')"
    />
    <section
      class="items-start gap-4 grid grid-cols-1"
    >
      <template
        v-for="(project, index) in projects"
        :key="project.id"
      >
        <MotionSlideBlur
          :direction="index % 2 === 0 ? 'left' : 'right'"
        >
          <ProjectCard
            :project="project"
            :reverse="index % 2 === 1"
          />
        </MotionSlideBlur>
      </template>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()
const { data: projects } = await useAsyncData(`allProjects-${locale.value}`, async () => {
  const collection = ('projects_' + locale.value) as keyof Omit<Collections, 'blog'>
  return await queryCollection(collection).order('date', 'DESC').all() as Collections['projects_en'][] | Collections['projects_th'][]
}, {
  watch: [locale],
})

useSeoMeta({
  title: () => t('project.subtitle'),
  ogTitle: () => t('project.subtitle'),
  description: () => t('project.subtitle'),
  ogDescription: () => t('project.subtitle'),
  ogImage: '/ogImage-projects.webp',
  ogUrl: 'https://www.bkozii.com/Projects',
})
</script>
