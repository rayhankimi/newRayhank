// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Rayhan Kimi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Rayhan Kimi personal website' },
        { name: 'keywords', content: 'rayhankimi, rayhank.com, rayhan kimi nabiel athallah, rayhan kimi, rayhan kimi portfolio, rayhan kimi personal website' },
        { name: 'author', content: 'Rayhan Kimi' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#b6ead6' },
        { property: 'og:title', content: 'Rayhan Kimi' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://rayhank.com' },
        { property: 'og:image', content: '/images/og-image.png' },
        { property: 'og:description', content: 'Rayhan Kimi personal website' },
        { property: 'og:site_name', content: 'Rayhan Kimi' }

      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
