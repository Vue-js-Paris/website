export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/icon",
    "nuxt-auth-utils",
    "@nuxt/content",
    "@vueuse/nuxt",
  ],

  runtimeConfig: {
    sessionPassword: process.env.NUXT_SESSION_PASSWORD,
    githubClientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,

    public: {
      youtubeApiBaseUrl: process.env.NUXT_YOUTUBE_API_BASE_URL,
      youtubeApiKey: process.env.NUXT_YOUTUBE_API_KEY,
      youtubeChannelId: process.env.NUXT_YOUTUBE_CHANNEL_ID,
      githubClientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
    },
  },
});