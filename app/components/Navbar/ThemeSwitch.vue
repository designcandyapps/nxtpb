<template>
  <div class="inline-flex">
    <ClientOnly>
      <UTooltip
        text="Switch Color Mode"
        disable-closing-trigger
      >
        <UButton
          color="neutral"
          variant="ghost"
          :icon="isDark ? 'solar:moon-linear' : 'solar:sun-linear'"
          @click="startViewTransition"
        />
      </UTooltip>

      <template #fallback>
        <USkeleton
          class="size-6"
          :ui="{ rounded: 'rounded-full' }"
        />
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
const startViewTransition = (event: MouseEvent) => {
  if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  const transition = document.startViewTransition(() => {
    isDark.value = !isDark.value
  })

  transition.ready.then(() => {
    const duration = 600
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: duration,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  })
}
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 99;
}
::view-transition-old(root) {
  z-index: 1;
}
</style>
