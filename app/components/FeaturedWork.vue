<template>
  <div>
    <section class="flex justify-between items-center mb-4 pb-4 border-default border-b">
      <div>
        <h2 class="font-bold text-2xl">
          Featured Works
        </h2>
        <p class="text-muted">
          {{ $t('home.featuredWork.subtitle') }}
        </p>
      </div>
      <UButton
        color="primary"
        variant="ghost"
        :to="$localePath('/projects')"
        trailing-icon="lucide:arrow-right"
        label="All Projects"
        class="not-prose"
      />
    </section>

    <div class="flex flex-col gap-4">
      <div
        v-for="(f, index) in fProjects"
        :key="f.id"
      >
        <ProjectCard
          :project="f"
          :reverse="index % 2 === 1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const { data: fProjects } = await useAsyncData(`projects-${locale.value}`, async () => {
  const collection = ('projects_' + locale.value) as keyof Omit<Collections, 'blog'>
  return await queryCollection(collection).where('featured', '=', true).order('date', 'DESC').limit(3).all() as Collections['projects_en'][] | Collections['projects_th'][]
}, {
  watch: [locale],
})
</script>
