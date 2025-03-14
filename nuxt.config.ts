import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Vue.js Paris",
      htmlAttrs: { lang: "fr" },
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Découvrez Vue.js Paris : talks, conférences, et rencontres autour de Vue.js. Une communauté dynamique pour échanger et partager sur le framework Vue.js.",
        },
        { hid: "author", name: "author", content: "Alexis Vachet" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          sizes: "32x32",
          href: "/logo/vuejs_paris_logo.webp",
        },
      ],
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/icon",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
  ],
  fonts: {
    herotitle: {
      name: "Gasoek One",
      provider: "google",
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  future: {
    compatibilityVersion: 4,
  },
});
