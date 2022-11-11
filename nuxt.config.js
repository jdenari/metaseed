export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'metaseed',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyB-hJ5nFh17moj2yz6t64MGiONTZN0A7qM",
          authDomain: "metaseed-auth.firebaseapp.com",
          projectId: "metaseed-auth",
          storageBucket: "metaseed-auth.appspot.com",
          messagingSenderId: "699367014454",
          appId: "1:699367014454:web:bcbc59bb5af6c83509d897",
          measurementId: "G-YYJPD81DD6"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false,
          }
        }
      }
    ]

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
