// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      COMPANY_NAME: '',
      COMPANY_NAME_ORG: '',
      FOOTER_ADDRESS: '',
      FOOTER_EMAIL: '',
      FOOTER_PHONE: ''
    }
  },

  modules: ["@nuxtjs/sitemap", "@nuxtjs/seo", "@pinia/nuxt"],

  site: {
    url: process.env.NUXT_PUBLIC_COMPANY_URL,
    name: process.env.NUXT_PUBLIC_COMPANY_NAME,
    description: 'Welcome to' + process.env.NUXT_PUBLIC_COMPANY_NAME,
    defaultLocale: 'en',
  }
})