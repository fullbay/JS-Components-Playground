import pkg from './package'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/JS-Components-Playground/'
  }
} : {};

export default {
  mode: 'universal',

  /* Headers of the page */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /* Customize the progress-bar color */
  loading: { color: '#fff' },

  /* Global CSS */
  css: ['~/assets/styles/style.scss'],


  /* Plugins to load before mounting the App */
  plugins: [],

  /* Nuxt.js modules */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /* Axios module configuration */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /* Build configuration */
  ...routerBase,
  generate: {
    dir: 'docs'
  },
  build: {
    /* You can extend webpack config here */
    extend(config, ctx) {}
  }
}