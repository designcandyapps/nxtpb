<template>
  <div
    class="top-0 z-10 sticky bg-default border-default border-b"
  >
    <UContainer class="border-default border-x w-full">
      <header class="flex items-center h-(--header-height)">
        <div class="flex flex-row flex-1 items-center space-x-4">
          <NuxtLinkLocale
            id="myName"
            to="/"
            class="font-mono font-bold text-highlighted"
            aria-label="logo"
          >
            <UIcon
              name="my-icon:konkamon"
              class="align-middle"
            />
          </NuxtLinkLocale>
          <UNavigationMenu
            class="hidden md:block"
            :ui="{ link: 'after:-bottom-1 after:h-0.5', linkLabel: 'uppercase' }"
            :items="navItems"
            variant="link"
            highlight
          />
        </div>
        <div class="flex flex-row justify-end space-x-2 shrink-0">
          <LazyNavbarLangSwitch />
          <LazyNavbarThemeSwitch />
          <LazyUButton
            variant="ghost"
            class="md:hidden inline-flex"
            icon="solar:hamburger-menu-linear"
            color="neutral"
            @click="openModal"
          />
        </div>
      </header>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
import { LazyNavbarMobileNav } from '#components'

const localePath = useLocalePath()
const overlay = useOverlay()
const { t } = useI18n()

const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: t('navbar.projects'),
    to: localePath('/projects'),
    icon: 'solar:inbox-archive-line-duotone',
  },
  {
    label: t('navbar.bag'),
    icon: 'solar:backpack-line-duotone',
    disabled: true,
  },
])

const modal = overlay.create(LazyNavbarMobileNav)

const openModal = () => {
  modal.open({ menu: navItems.value })
}
</script>
