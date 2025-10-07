<template>
  <ClientOnly>
    <UTooltip
      :text="$t('langSwitcher')"
      disable-closing-trigger
    >
      <UButton
        :icon="locale === 'en' ? 'circle-flags:us' : 'circle-flags:th'"
        variant="ghost"
        color="neutral"
        :to="$switchLocalePath(locale === 'en' ? 'th' : 'en')"
        replace
      />
    </UTooltip>

    <template #fallback>
      <USkeleton
        class="size-6"
        :ui="{ rounded: 'rounded-full' }"
      />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
