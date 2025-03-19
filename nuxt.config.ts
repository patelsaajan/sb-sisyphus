// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxthq/studio",
    "@nuxt/content",
    "@nuxt/icon",
    "nuxt-swiper",
  ],
});
