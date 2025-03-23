// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "../src",
  },

  components: {
    dirs: ["./src/components"],
  },

  dir: {
    layouts: "./src/app/layouts",
    middleware: "./src/app/config/route/middleware",
    plugins: "./src/app/plugins",
    app: "./src/app/app.vue",
    pages: "./src/pages",
    shared: undefined,
    assets: "./src/libs/assets",
  },

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
});
