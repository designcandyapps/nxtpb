<template>
  <MotionSlideBlur
    as="section"
    direction="up"
    class="relative py-16 overflow-hidden"
  >
    <div class="mb-12">
      <h1 class="font-black text-toned text-5xl md:text-7xl text-center tracking-tight">
        {{ $t('home.hero.prefix') }}
        <span class="inline-block text-primary">{{ $t('home.hero.myName') }}</span>
      </h1>
      <p class="my-2 md:my-4 text-muted md:text-lg text-center text-balance">
        {{ $t('home.hero.intro') }}
      </p>
      <div class="flex flex-row justify-center lg:justify-start items-center gap-2 mx-auto mt-8 w-fit">
        <UTooltip text="Undergoing...">
          <UButton
            icon="lucide:external-link"
            color="primary"
            size="lg"
            disabled
          >
            Open CV - Thai
          </UButton>
        </UTooltip>
        <UButtonGroup size="lg">
          <UTooltip text="Copy my email">
            <UButton
              icon="lucide:mail"
              variant="subtle"
              class="cursor-pointer"
              @click="copyEmail"
            />
          </UTooltip>
          <UButton
            icon="lucide:instagram"
            variant="subtle"
            to="https://www.instagram.com/bkoziii/"
            target="_blank"
          />
          <UButton
            icon="lucide:github"
            variant="subtle"
            to="https://github.com/bkozii"
            target="_blank"
          />
        </UButtonGroup>
      </div>
    </div>

    <div class="mx-auto w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <NuxtImg
        src="me-rmutsv-square_hhiarv"
        provider="cloudinary"
        class="inline-block drop-shadow-2xl dark:drop-shadow-none rounded-lg object-cover aspect-square"
        alt="Picture of Me, Konkamon Sion"
      />
    </div>
  </MotionSlideBlur>
</template>

<script setup lang="ts">
const toast = useToast()
const copyEmail = () => {
  const email = 'konkamon.work@gmail.com'
  try {
    navigator.clipboard.writeText(email)
  } finally {
    toast.add({
      title: 'Copied Email',
      description: `Email "${email}" has been copied to clipboard.`,
      color: 'success',
      icon: 'solar:check-circle-linear',
      duration: 2000,
    })
  }
}
</script>
