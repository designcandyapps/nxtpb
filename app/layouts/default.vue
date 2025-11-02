<template>
  <div class="relative">
    <MainNavbar />
    <UContainer class="space-y-8 border-default md:border-x">
      <main class="pb-12 min-h-[calc(100dvh-(var(--header-height)))]">
        <slot />
      </main>
    </UContainer>
    <MainFooter />
  </div>
</template>
