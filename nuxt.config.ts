// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ui: {
    global: true,
  },
  modules: ['@nuxt/ui', "@nuxt/image"],
  devtools: { enabled: true }
})