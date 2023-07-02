import vsharp from 'vite-plugin-vsharp';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    stripeSecret: '',
    public: {
      stripeKey: '',
    },
  },
  nitro: {
    prerender: {
      routes: ['/landing'],
    },
  },
  vite: {
    plugins: [vsharp()],
  },
  modules: [
      '@nuxtjs/tailwindcss',
      '@vueuse/nuxt',
      '@nuxtjs/supabase',
      '@pinia/nuxt',
    ],
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    postcss: {},
    autoprefixer: {},
  }
})
