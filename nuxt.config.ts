export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    }
  },

  css: ['~/style.css'],
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/ui']
})