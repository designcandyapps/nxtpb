<template>
  <section class="text-toned leading-7">
    <MotionSlideBlur
      direction="up"
      :delay="0.2"
    >
      <h2 class="mb-4 font-bold text-highlighted text-2xl">
        {{ $t('home.aboutMe.title') }}
      </h2>
      <p class="mb-4">
        {{ $t('home.aboutMe.introduction') }}
      </p>
      <p>
        {{ $t('home.aboutMe.passion') }}
      </p>
    </MotionSlideBlur>
  </section>
</template>
