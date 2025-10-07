<template>
  <div
    class="group flex flex-col items-center bg-default shadow-sm border border-default hover:border-primary rounded-lg overflow-hidden"
    :class="$props.reverse ? 'md:flex-row' : 'md:flex-row-reverse'"
  >
    <div class="relative w-full lg:w-2/3 overflow-hidden">
      <div
        id="bottomMenu"
        class="right-0 bottom-2 sm:-bottom-3 sm:group-hover:bottom-2 left-0 absolute flex justify-center items-center mx-auto w-fit sm:group-hover:scale-100 sm:scale-90 transition-all"
      >
        <UButton
          v-if="!project.wip && project.githubURL"
          trailing-icon="lucide:external-link"
          :to="project.githubURL"
          target="_blank"
          external
          label="View Source Code"
          color="primary"
        />
        <UAlert
          v-else-if="$props.project.wip"
          color="warning"
          icon="solar:code-square-linear"
          :title="$t('project.wip')"
          class="py-1"
        />
      </div>
      <img
        class="md:rounded-none md:rounded-s-lg rounded-t-lg w-full md:w-md h-fit md:h-auto object-cover"
        :src="$props.project.image"
        alt=""
      >
    </div>
    <div class="flex flex-col justify-between p-4 w-full leading-normal">
      <NuxtTime
        v-if="$props.project.date"
        :datetime="$props.project.date"
        year="numeric"
        month="long"
        :locale="$i18n.locale"
        class="inline-block mb-2 text-muted text-sm"
      />
      <h5 class="mb-2 font-bold text-gray-900 dark:text-white group-hover:text-primary text-2xl tracking-tight">
        {{ $props.project.title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ $props.project.description }}
      </p>
      <section class="space-x-1 mt-2">
        <template
          v-for="tech in $props.project.technologies"
          :key="tech"
        >
          <UBadge
            :label="tech"
            variant="subtle"
          />
        </template>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectsEnCollectionItem } from '@nuxt/content'

defineProps<{
  project: ProjectsEnCollectionItem
  reverse?: boolean
  class?: string
}>()
</script>
