export default defineNuxtPlugin(() => {
  const router = useRouter()
  router.afterEach(() => {
    setTimeout(async () => {
      const nuxtApp = useNuxtApp()
      nuxtApp.$i18n.setLocaleCookie(nuxtApp.$i18n.locale.value)
      await nuxtApp.$i18n.finalizePendingLocaleChange()
    }, 300)
  })
})
