export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/image']
})